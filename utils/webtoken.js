import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export default function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"];
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).end();

    req.userId = decoded.userId;
    next();
  });
}
