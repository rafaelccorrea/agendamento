import express from 'express';
import 'dotenv/config'
import cors from "cors";
import { TokenMiddleware } from "./server/middlewares";

import {
  ClienteRoutes,
  AgendaRoutes
} from './server/routes'

const port = process.env.PORT || 8000;
const app = express();

//Config
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Rotas
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Api Online.",
  })
);

app.use("/api", ClienteRoutes);

app.use("/api/*", TokenMiddleware);

app.use("/api/agenda", AgendaRoutes);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;