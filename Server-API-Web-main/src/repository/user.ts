import { UsersDto } from "../dto/users.dto";
import { handleStatus } from "../helpers/statusResponse";
import { plainToClass } from "class-transformer";

import { Users } from "../models/users";

const add = async (input:UsersDto) => {
  if (!input || !input.userName) return handleStatus(500);
  let user = plainToClass(Users, input);
  try {
    await user.save();
    return handleStatus(200);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const getAll = async () => {
  try {
    let users = await Users.find({active:true,permission:'user'});
    
    return handleStatus(200, null, users);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const getAllAdmin = async () => {
  try {
    let users = await Users.find({active:true,permission:'admin'});
    
    return handleStatus(200, null, users);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const getById = async (id: string) => {
  let user = await Users.findById(id);
  if (!user) return handleStatus(404);
  return handleStatus(200, null, user);
};
const remove = async (id: string) => {
  let user = await Users.findById(id);
  if (!user) return handleStatus(404);
  user.active = false;
  try {
    await user.save();
    return handleStatus(200);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const update = async (input: UsersDto) => {
  if (!input) return handleStatus(400);
  let user = await Users.findById(input._id);
  if (!user) return handleStatus(404);
  console.log(input);

  try {
    await user.update(input);
    return handleStatus(200);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const getuserwithKey = async (key?: String) => {
  try {
    let users = await Users.find({
      active:true,
      userName:  key ,
    })
      
    return handleStatus(200, null, users);
  } catch (e) {
    return handleStatus(500,e);
  }
};

const restore = async () => {};
export const userRepo = { add, getAll,getAllAdmin, getById, remove, update, getuserwithKey };
