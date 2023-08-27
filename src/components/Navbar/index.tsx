import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'
import { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContextType } from '../../interface';


export default function Navbar():JSX.Element {

  const context = useContext(ShoppingCartContext ) as ShoppingCartContextType
  
  const activeStyle = 'underline underline-offset-4'
  const noActiveStyle = "  border border-slate-100 p-1 rounded-lg hover:text-violet-500 hover:border-green-400"

  return (
    <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm border-b bg-slate-100'>
      <ul className=' items-center gap-3 hidden max-lg:flex'>
        <li onClick={()=>{context.setOpenMobileMenu(!context.openMobileMenu)}}>
          <Bars3Icon className='w-6 '/>
        </li>
        <li className='font-semibold text-lg '>
          <NavLink 
          to={'/'}>
            Shoping
          </NavLink>
        </li>
      </ul>
      


      <ul className='flex items-center gap-3 max-lg:hidden'>
        <li className='font-semibold text-lg '>
          <NavLink 
          to={'/'}>
            Shoping
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/All'} 
          onClick={()=> context.setSearchItemsCategory('')}
          className={({ isActive}) =>
          isActive ? activeStyle : noActiveStyle
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/Clothes'} 
          onClick={()=> context.setSearchItemsCategory('Clothes')}
          className={({ isActive}) =>
          isActive ? activeStyle : noActiveStyle
          }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/Electronic'} 
          onClick={()=> context.setSearchItemsCategory('Electronic')}
          className={({ isActive}) =>
          isActive ? activeStyle : noActiveStyle
          }>
            Electronic
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/Furnitures'}  
          onClick={()=> context.setSearchItemsCategory('Furnitures')}
          className={({ isActive}) =>
            isActive ? activeStyle : noActiveStyle
          }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/Toys'} 
          onClick={()=> context.setSearchItemsCategory('Toys')}
          className={({ isActive}) =>
          isActive ? activeStyle : noActiveStyle
          }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/Others'}
          onClick={()=> context.setSearchItemsCategory('Others')}
          className={({ isActive}) =>
          isActive ? activeStyle : noActiveStyle
          }>
            Others
          </NavLink>
        </li>
      </ul>
      







      <ul className='flex items-center gap-3 max-lg:hidden'>
        <li>
          <UserCircleIcon className='text-gray-400 w-6 cursor-pointer'/>
        </li>
        <li>
          <NavLink 
          to={'/my-orders'} 
          className={({ isActive}) =>
            isActive ? "underline text-red-600" : ""
          }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/my-account'} 
          className={({ isActive}) =>
            isActive ? "underline text-red-600" : ""
          }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/sign-in'} 
          className={({ isActive}) =>
            isActive ? "underline text-red-600" : ""
          }>
            Sign In
          </NavLink>
        </li>
        <li onClick={context.OpenCheckoutSideMenu} className=' cursor-pointer'>
          <ShoppingCartIcon className='w-5 inline'/>{context.totalCart}
        </li>
      </ul>

      <ul className=' items-center hidden max-lg:flex'>
        <li onClick={context.OpenCheckoutSideMenu} className=' cursor-pointer'>
          <ShoppingCartIcon className='w-5 inline'/>{context.totalCart}
        </li>
      </ul>
    </nav>
  )
}
