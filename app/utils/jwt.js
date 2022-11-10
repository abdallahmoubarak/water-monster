import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createJWT = (data) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      data,
      process.env.NEXT_PUBLIC_JWT_SECRET,
      { expiresIn: "30d" },
      (err, token) => {
        if (err) return reject(err);
        return resolve(token);
      },
    );
  });
};

export const comparePassword = (plainText, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainText, hash, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
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

export const decodeJWT = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, (err, decoded) => {
      if (err) return reject(err);
      const { sub } = decoded;
      return resolve({ sub });
    });
  });
};
