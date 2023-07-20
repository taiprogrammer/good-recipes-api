import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import express from "express";

import { fileURLToPath } from "url";
import { logger } from "./log/index.log.js";

import UserRouter from "./routers/usuario.route.js";
import RecipeRouter from "./routers/receita.route.js";
import AddressRouter from "./routers/endereco.route.js";
import FavoriteRouter from "./routers/favorito.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", UserRouter);
app.use("/recipe", RecipeRouter);
app.use("/address", AddressRouter);
app.use("/favorite", FavoriteRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "/", "uploads")));

app.use((err, req, res, next) => {
  console.log("unexpected filed", err.field);
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
