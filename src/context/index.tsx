import React, {createContext, useState} from 'react'
import { PropsType, ShoppingCartContextType } from '../interface'

export const ShoppingCartContext = createContext<ShoppingCartContextType|undefined>(undefined)

export const ShoppingCartProvider:React.FC<PropsType> = ({children})=>{

  const [count, setCount] = useState<number>(0)


  return(
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}