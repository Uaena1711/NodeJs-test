import { Response, Request } from "express";
import { plainToClass } from "class-transformer";
import { UsersDto } from "../dto/users.dto";
import { userRepo} from "../repository/user";
import { domain } from "../helpers/domain";

const add = async (req: Request, res: Response) => {
  let grade = req.body;
  let gradeInput = plainToClass(UsersDto, grade);
  
  let result = await userRepo.add(gradeInput);
  return res.send(result);
};
const getAll = async (req: Request, res: Response) => {
  let result = await userRepo.getAll();
  return res.send(result);
};
const getAllAdmin = async (req: Request, res: Response) => {
  let result = await userRepo.getAllAdmin();
  return res.send(result);
};
const update = async (req: Request, res: Response) => {
  let grade = req.body;
  let gradeInput = plainToClass(UsersDto, grade);
 
  let result = await userRepo.update(gradeInput);
  return res.send(result);
};
const remove = async (req: Request, res: Response) => {
  let id = req.query.id;
  let result = await userRepo.remove(id);
  return res.send(result);
};
const restore = async (req: Request, res: Response) => {};
const getById = async (req: Request, res: Response) => {
  let id = req.params.id;
  let result = await userRepo.getById(id);
  return res.send(result);
};
const getUserwithKey = async (req: Request, res: Response) => {
  let key = req.query.key;
  let result = await userRepo.getuserwithKey(key);
  return res.send(JSON.stringify(result));
};
export const userController = {
  add,
  update,
  getAll,
  getAllAdmin,
  remove,
  getById,
  getUserwithKey
};
