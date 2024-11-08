import { Router } from "express";
const router = Router();
import { getTravelData } from "../controllers/api.js";

//Get search request from tripAdvisorAPI:
router.get("/search", getTravelData);

export default router;
