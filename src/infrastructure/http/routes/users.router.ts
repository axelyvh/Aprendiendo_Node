import express from "express";
import { userController } from "../../dependencies";

const router = express.Router();
router.post("/:id/welcome", userController.run.bind(userController));

export { router };