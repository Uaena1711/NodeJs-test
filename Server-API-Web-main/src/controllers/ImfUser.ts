import { Response, Request } from "express";
import { plainToClass } from "class-transformer";
import { ImfUsersDto } from "../dto/imfUsers.dto";
import { ImfUserRepo } from "../repository/ImfUsers";
import { domain } from "../helpers/domain";

const add = async (req: Request, res: Response) => {
  let grade = req.body;
  let gradeInput = plainToClass(ImfUsersDto, grade);
  
  let result = await ImfUserRepo.add(gradeInput);
  return res.send(result);
};
const getAll = async (req: Request, res: Response) => {
  let result = await ImfUserRepo.getAll();
  return res.send(result);
};
const update = async (req: Request, res: Response) => {
  let grade = req.body;
  let gradeInput = plainToClass(ImfUsersDto, grade);
 
  let result = await ImfUserRepo.update(gradeInput);
  return res.send(result);
};
const remove = async (req: Request, res: Response) => {
  let id = req.query.id;
  let result = await ImfUserRepo.remove(id);
  return res.send(result);
};
const restore = async (req: Request, res: Response) => {};
const getById = async (req: Request, res: Response) => {
  let id = req.params.id;
  let result = await ImfUserRepo.getById(id);
  return res.send(result);
};
const getImfUserwithKey = async (req: Request, res: Response) => {
  let key = req.query.key;
  let result = await ImfUserRepo.getImfuserwithKey(key);
  return res.send(JSON.stringify(result));
};
export const ImfUserController = {
  add,
  update,
  getAll,
  remove,
  getById,
  getImfUserwithKey
};
