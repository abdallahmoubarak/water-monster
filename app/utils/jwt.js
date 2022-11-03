import jwt from "jsonwebtoken";

export const createJWT = (data) => {
  return new Promise((resolve, reject) => {
    jwt.sign(data, process.env.NEXT_PUBLIC_JWT_SECRET, (err, token) => {
      if (err) return reject(err);

      return resolve(token);
    });
  });
};
