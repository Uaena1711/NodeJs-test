import express from "express";
import * as productController  from "../controllers/product";
import { uploadCoverGrade } from "../services/upload";

const productRouter = express.Router();
productRouter 
  .get("/", productController.getAll)
  .get("/search",productController.getProductwithKey)
  .get("/:id", productController.getById)
  .post("/add", uploadCoverGrade.single("cover"), productController.add)
  .put("/", uploadCoverGrade.single("cover"), productController.update)
  .delete("/", productController.remove);

export default productRouter ;
