import jwt from "jsonwebtoken";

const generateToken = (data) => {
  const token = jwt.sign(data, "agendamento", {
    expiresIn: 86400,
  });

  return `bearer ${token}`;
};

export { generateToken };