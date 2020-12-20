import mongoose, { Schema } from "mongoose"



export type IProductDocument = mongoose.Document & {

  id:number;
  title: string;
  img:string;
  price:number;
  company:string;
  imfo:string;
  count:number;
  total:number;
  Opsys:string;
  CamBack:string;
  CamFront:string;
  CPU:string;
  RAM:string;
  Capacity:string;
  MemorySize: string;
  active: Boolean;
  
};

const productSchema = new mongoose.Schema(
  { 
    
    id:{type: Number},
    title: { type: String }, // tên hiển thị
    img: { type: String }, 
    price: {type:Number},
    company:{ type: String },
    imfo:{ type: String },
    count:{type:Number,default:0},
    total:{type:Number,default:0},
    Opsys:{ type: String },
    CamBack:{ type: String },
    CamFront:{ type: String },
    CPU:{ type: String },
    RAM:{ type: String },
    Capacity:{ type: String },
    MemorySize: { type: String },
    active:{type:Boolean,default:true}
    
  },
  { timestamps: true }
);
// gradeSchemal.plugin(softdelete);

export const Products = mongoose.model<IProductDocument>("storeProducts", productSchema,"storeProducts");
