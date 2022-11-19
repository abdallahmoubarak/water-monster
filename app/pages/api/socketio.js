import { Server } from "socket.io";

let onlineUsers = [];
const addUser = (userId, socketId) => {
  if (!onlineUsers.some((user) => user.userId === userId))
    onlineUsers = [...onlineUsers, { userId, socketId }];
};
const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};
const getUser = (userId) => {
  return onlineUsers.find((user) => user.userId === userId);
};

export default async function handler(req, res) {
  if (!res.socket.server.io) {
    console.log("New Socket.io server...");
    const httpServer = res.socket.server;

    const io = new Server(httpServer, { path: "/api/socketio" });

    io.on("connect", (socket) => {
      console.log("a user connected.");

      socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        socket.emit("getUsers", onlineUsers);
      });

      // send and get message
      socket.on("sendMessage", ({ senderId, receiverId, content }) => {
        const user = getUser(receiverId);
        socket.to(user.socketId).emit("getMessage", {
          senderId,
          content,
        });
      });

      // make call
      socket.on("call", ({ calledId, callerId, callerName }) => {
        const user = getUser(calledId);
        socket.to(user.socketId).emit("getCall", { callerId, callerName });
      });

      // connecting call
      socket.on("connectCall", ({ callerId }) => {
        const callingUser = getUser(callerId);
        socket.to(callingUser.socketId).emit("coCall", { callerId });
      });

      // disconnecting call
      socket.on("disconnectCall", ({ callerId }) => {
        const callingUser = getUser(callerId);
        socket.to(callingUser.socketId).emit("disCall", { callerId });
      });

      // when disconnect
      socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        socket.emit("getUsers", onlineUsers);
      });
    });

    res.socket.server.io = io;
  }
  res.end();
}
