import { Expose } from "class-transformer";

export class ProductDto {
  @Expose()
  _id: string; 
  @Expose()
  id:number;
  @Expose()
  title: string;
  @Expose()
  img:string;
  @Expose()
  price:number;
  @Expose()
  company:string;
  @Expose()
  imfo:string;
  @Expose()
  count:number;
  @Expose()
  total:number;
  @Expose()
  Opsys:string;
  @Expose()
  CamBack:string;
  @Expose()
  CamFront:string;
  @Expose()
  CPU:string;
  @Expose()
  RAM:string;
  @Expose()
  Capacity:string;
  @Expose()
  MemorySize: string
}
