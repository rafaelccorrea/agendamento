import { Router } from "express";
import { ClienteController } from "../controllers";

const router = Router();

router.post("/signup", ClienteController.signup);
router.post("/signin", ClienteController.signin);

export default router;