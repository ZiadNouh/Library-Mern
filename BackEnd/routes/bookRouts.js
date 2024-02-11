import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

router.post("/", bookController.addBook);

router.get("/", bookController.getAllBooks);

router.get("/:id", bookController.getOneBook);

router.put("/:id", bookController.updateBook);

router.delete("/:id", bookController.deleteBook);

export default router;
