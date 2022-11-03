import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createJWT = (data) => {
  return new Promise((resolve, reject) => {
    jwt.sign(data, process.env.NEXT_PUBLIC_JWT_SECRET, (err, token) => {
      if (err) return reject(err);

      return resolve(token);
    });
  });
};

const saltRounds = 10;

export const hashPassword = (plainText) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(plainText, saltRounds, (err, hash) => {
      if (err) return reject(err);

      return resolve(hash);
    });
  });
};
