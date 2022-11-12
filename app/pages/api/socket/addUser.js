export default (req, res) => {
  if (req.method === "POST") {
    let users = [];
    const addUser = (userId, socketId) => {
      !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
    };

    res?.socket?.server?.io.on("connection", (socket) => {
      console.log("a user connected.");
      // take userId and socketId from user
      res?.socket?.server?.io.on("addUser", (userId) => {
        addUser(userId, socket.id);
      });
      res?.socket?.server?.io.emit("getUsers", users);
    });

    res.status(201).json(users);
  }
};
