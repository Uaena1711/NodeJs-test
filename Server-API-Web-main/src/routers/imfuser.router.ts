import express from "express";
import {ImfUserController} from "../controllers/ImfUser"
import { uploadCoverGrade } from "../services/upload";

const ImfUserRouter  = express.Router();
ImfUserRouter 
  .get("/", ImfUserController.getAll)
  .get("/search",ImfUserController.getImfUserwithKey)
  .get("/:id", ImfUserController.getById)
  .post("/add", uploadCoverGrade.single("cover"), ImfUserController.add)
  .put("/", uploadCoverGrade.single("cover"), ImfUserController.update)
  .delete("/", ImfUserController.remove);

export default ImfUserRouter ;
