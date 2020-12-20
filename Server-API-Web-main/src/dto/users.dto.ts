import { Expose } from "class-transformer";

export class UsersDto {
  @Expose()
  _id: string; 
  @Expose()
  userName:string;
  @Expose()
  permission:string;
  
}
