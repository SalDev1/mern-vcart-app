import express from "express";
import { getAllProducts, getProductById } from "../controllers/product.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", auth, getProductById);

export default router;
