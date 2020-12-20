import express from "express";
import {userController} from "../controllers/users"
import { uploadCoverGrade } from "../services/upload";

const userRouter  = express.Router();
userRouter 
  .get("/", userController.getAll)
  .get("/admin", userController.getAllAdmin)
  .get("/search",userController.getUserwithKey)
  .get("/:id", userController.getById)
  .post("/add",  userController.add)
  .put("/", uploadCoverGrade.single("cover"), userController.update)
  .delete("/", userController.remove);

export default userRouter ;
