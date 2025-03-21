import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";


const router = Router();
router.get("/post", authRequired, (req, res) => res.send("post"));


export default router;