import mongoose, { Schema } from "mongoose"



export type IImfUserDocument = mongoose.Document & {
  
  HovaTen:string;
  PhoneNumber: string;
  Address:string;
  userID:string;
  
};

const ImfuserSchema = new mongoose.Schema(
  { 
    
    HovaTen: { type: String }, // tên hiển thị
    PhoneNumber: { type: String }, 
    Address: {type:String},
    userID:{type:String}
    
    
  },
  { timestamps: true }
);
// gradeSchemal.plugin(softdelete);

export const ImfUsers = mongoose.model<IImfUserDocument>("ImfUsers", ImfuserSchema,"ImfUsers");
