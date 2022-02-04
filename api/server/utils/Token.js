import jwt from "jsonwebtoken";

const generateToken = (data) => {
  const token = jwt.sign(data, "letsfood", {
    expiresIn: 86400,
  });

  return `bearer ${token}`;
};

export { generateToken };