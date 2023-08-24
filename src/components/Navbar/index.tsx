import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'
import { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline';


export default function Navbar():JSX.Element {

  const context = useContext(ShoppingCartContext ) as ShoppingCartContextType
  
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm border-b bg-slate-100'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold'>
          <NavLink 
          to={'/'}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/All'} 
          className={({ isActive}) =>
            isActive ? activeStyle : ""
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/Clothes'} 
          className={({ isActive}) =>
            isActive ? activeStyle : ""
          }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/Electronic'} 
          className={({ isActive}) =>
            isActive ? activeStyle : ""
          }>
            Electronic
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/Furnitures'}  
          className={({ isActive}) =>
            isActive ? activeStyle : ""
          }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/Toys'} 
          className={({ isActive}) =>
            isActive ? activeStyle : ""
          }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
          to={'/Others'} 
          className={({ isActive}) =>
            isActive ? activeStyle : ""
          }>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li>
          <p className='text-gray-400'>
            Correo@gmail.com
          </p>
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
    </nav>
  )
}
