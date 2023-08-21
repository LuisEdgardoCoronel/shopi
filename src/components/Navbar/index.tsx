import { NavLink } from 'react-router-dom'
export default function Navbar():JSX.Element {

  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm '>
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
        <li>
          🛒0
        </li>
      </ul>
    </nav>
  )
}
