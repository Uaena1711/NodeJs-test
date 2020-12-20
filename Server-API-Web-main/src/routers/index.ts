
import productRouter from "./product.router";
import userRoter from "./user.router"
import ImfUserRouter from "./imfuser.router"

export const router = (app: any) => {
  
  app.use("/api/products", productRouter);
  app.use("/api/users", userRoter);
  app.use("/api/Imfusers", ImfUserRouter);
};
