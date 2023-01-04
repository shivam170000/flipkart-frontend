export interface Product {
    productID: number;
    productName: string;
    unit: number;
    price: number;
    supplierID: number;
    productImage : string;
    supplier: any; //json
  }
  
  export class ProductVo {
    productID! : number;
    productName!: string;
    unit! : number;
    price! : number;
    supplierID! : number;
    productImage !: string;
  }