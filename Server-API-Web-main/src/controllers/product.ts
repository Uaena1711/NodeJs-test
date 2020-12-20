import { Response, Request } from "express";
import { plainToClass } from "class-transformer";
import { ProductDto } from "../dto/product.dto";
import { ProductRepo } from "../repository/product";
import { domain } from "../helpers/domain";
import { cat } from "shelljs";

export const add = async (req: Request, res: Response) => {
  let grade = req.body;
  let gradeInput = plainToClass(ProductDto, grade);
  
  let result = await ProductRepo.add(gradeInput);
  return res.send(result);
};
export const getAll = async (req: Request, res: Response) => {
  let result = await ProductRepo.getAll();
  console.log(result);
  return res.send(result);
};
export const update = async (req: Request, res: Response) => {
  let grade = req.body;
  let gradeInput = plainToClass(ProductDto, grade);
 
  let result = await ProductRepo.update(gradeInput);
  return res.send(result);
};
export const remove = async (req: Request, res: Response) => {
  let id = req.query.id;
  let result = await ProductRepo.remove(id);
  return res.send(result);
};
export const restore = async (req: Request, res: Response) => {};
export const getById = async (req: Request, res: Response) => {
  let id = req.params.id;
  let result = await ProductRepo.getById(id);
  return res.send(result);
};
export const getProductwithKey = async (req: Request, res: Response) => {
    const  key = req.query.key;
    let result = await ProductRepo.getAllProductwithKey(key);
    return res.send(JSON.stringify(result));
};

