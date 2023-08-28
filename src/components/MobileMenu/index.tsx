import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../context"
import { useContext } from "react"
import { ShoppingCartContextType } from "../../interface"
import { UserCircleIcon } from "@heroicons/react/24/solid"


export const MobileMenu = () => {

  
  const context = useContext(ShoppingCartContext ) as ShoppingCartContextType
  
  const activeStyle = 'underline underline-offset-4'
  const noActiveStyle = "  border border-slate-100 p-1 rounded-lg hover:text-violet-500 hover:border-green-400"
  
  const openMenu =()=>{
    if(context.openMobileMenu === true ){
      return(
      <div className="bg-slate-100 pt-2 pb-5 px-5 text-sm w-48 absolute top-16 rounded-lg mt-1">
        <ul className='flex flex-col gap-3 pb-3 border-b-2'>
          <li>
            <NavLink 
            to={'/All'} 
            onClick={()=> context.setSearchItemsCategory('')}
            className={({ isActive}) =>
            isActive ? activeStyle : noActiveStyle
            }>
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink 
            to={'/Clothes'} 
            onClick={()=> context.setSearchItemsCategory('Clothes')}
            className={({ isActive}) =>
            isActive ? activeStyle : noActiveStyle
            }>
              Ropa
            </NavLink>
          </li>
          <li>
            <NavLink 
            to={'/Electronic'} 
            onClick={()=> context.setSearchItemsCategory('Electronic')}
            className={({ isActive}) =>
            isActive ? activeStyle : noActiveStyle
            }>
              Electrodomesticos
            </NavLink>
          </li>
          <li>
            <NavLink 
            to={'/Furnitures'}  
            onClick={()=> context.setSearchItemsCategory('Furnitures')}
            className={({ isActive}) =>
              isActive ? activeStyle : noActiveStyle
            }>
              Muebles
            </NavLink>
          </li>
          <li>
            <NavLink 
            to={'/Toys'} 
            onClick={()=> context.setSearchItemsCategory('Toys')}
            className={({ isActive}) =>
            isActive ? activeStyle : noActiveStyle
            }>
              Juguetes
            </NavLink>
          </li>
          <li>
            <NavLink 
            to={'/Others'}
            onClick={()=> context.setSearchItemsCategory('Others')}
            className={({ isActive}) =>
            isActive ? activeStyle : noActiveStyle
            }>
              Otros
            </NavLink>
          </li>
        </ul>
        
        <ul className=' flex flex-col gap-3 mt-4'>
          <li>
            <NavLink 
            to={'/my-orders'} 
            className={({ isActive}) =>
              isActive ? "underline text-red-600" : ""
            }>
              Mis compras
            </NavLink>
          </li>
          <li>
            <NavLink 
            to={'/my-account'} 
            className={({ isActive}) =>
              isActive ? "underline text-red-600" : ""
            }>
              <UserCircleIcon className='text-gray-400 w-6 cursor-pointer'/>
            </NavLink>
          </li>
          <li>
            <NavLink 
            to={'/sign-in'} 
            className={({ isActive}) =>
              isActive ? "underline text-red-600" : ""
            }>
              Iniciar sesión
            </NavLink>
          </li>
        </ul>
  
      </div>
      )
    }
  }
  
 return(
  openMenu()
 )
}
