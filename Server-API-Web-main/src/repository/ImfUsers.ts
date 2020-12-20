import { ImfUsersDto } from "../dto/imfUsers.dto";
import { handleStatus } from "../helpers/statusResponse";
import { plainToClass } from "class-transformer";

import { ImfUsers } from "../models/ImfUsers";

const add = async (input:ImfUsersDto) => {
  if (!input || !input.HovaTen) return handleStatus(500);
  let user = plainToClass(ImfUsers, input);
  try {
    await user.save();
    return handleStatus(200);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const getAll = async () => {
  try {
    let users = await ImfUsers.find();
    
    return handleStatus(200, null, users);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const getById = async (id: string) => {
  let user = await ImfUsers.findById(id);
  if (!user) return handleStatus(404);
  return handleStatus(200, null, user);
};
const remove = async (id: string) => {
  let user = await ImfUsers.findById(id);
  if (!user) return handleStatus(404);
  
  try {
    await user.save();
    return handleStatus(200);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const update = async (input: ImfUsersDto) => {
  if (!input) return handleStatus(400);
  let user = await ImfUsers.findById(input._id);
  if (!user) return handleStatus(404);
  console.log(input);

  try {
    await user.update(input);
    return handleStatus(200);
  } catch (e) {
    return handleStatus(500, e);
  }
};
const getImfuserwithKey = async (key?: String) => {
  try {
    let ImfUser = await ImfUsers.findOne({
      
      PhoneNumber: { $regex: key || /^.*/, $options: "i" },
    })
      .limit(1)
      .select({
        _id:1,
        userName: 1,
      });
    return handleStatus(200, null, ImfUser);
  } catch (e) {
    return handleStatus(500,e);
  }
};

const restore = async () => {};
export const ImfUserRepo = { add, getAll, getById, remove, update, getImfuserwithKey };
