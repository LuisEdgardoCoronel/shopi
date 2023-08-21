import { ReactNode } from 'react';

export interface PropsType {
  children: ReactNode;
}


export interface Cards {
  key:number;
  price:number;
  title:string;
  image:string;
  category:string
}

export interface ShoppingCartContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

