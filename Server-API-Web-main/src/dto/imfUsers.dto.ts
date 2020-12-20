import { Expose } from "class-transformer";

export class ImfUsersDto {
  @Expose()
  _id: string; 
  @Expose()
  HovaTen:string;
  @Expose()
  PhoneNumber: string;
  @Expose()
  Address:string;
  @Expose()
  userID:string;
  
}
