import { Router } from "express";
import { AgendaController } from "../controllers";

const router = Router();

router.post("/criar", AgendaController.criarAgenda);

export default router;