import { ReactNode } from 'react';

export interface PropsType {
  children: ReactNode;
}


export interface Cards {
  key:number;
  price:number;
  title:string;
  image:string;
  category:string;
  description: string;
}

export interface ShoppingCartContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  toggleProductDetail:()=>void;
  isProductDetailOpen:boolean
  setIsProductDetailOpen:React.Dispatch<React.SetStateAction<boolean>>;
  productToShow:Partial<Cards>,
  setProductToShow:React.Dispatch<React.SetStateAction<Partial<Cards>>>
  showProduct:(price: number, title: string, image: string, category: string, description: string) => void
}