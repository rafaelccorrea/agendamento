import { Router } from "express";
import { AgendaController } from "../controllers";

const router = Router();

router.post("/criar", AgendaController.criarAgenda);
router.delete("/deletar", AgendaController.deleteAgenda);
router.put("/atualizar/:id", AgendaController.atualizarAgenda);
router.get("/busca/:id", AgendaController.listIdAgenda);
router.get("/busca", AgendaController.listAllAgenda);

export default router;