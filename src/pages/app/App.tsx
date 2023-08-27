import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context';

import Home from '../Home'
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import './App.css'
import Navbar from '../../components/Navbar';
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu';
import { MobileMenu } from '../../components/MobileMenu';


const AppRoutes: React.FC = ()=>{
  const routes = useRoutes([
    {path:'/', element:<Home/>},
    {path:'/All', element:<Home/>},
    {path:'/Clothes', element:<Home/>},
    {path:'/Electronic', element:<Home/>},
    {path:'/Furnitures', element:<Home/>},
    {path:'/Toys', element:<Home/>},
    {path:'/Others', element:<Home/>},
    {path:'/my-account', element:<MyAccount/>},
    {path:'/my-order', element:<MyOrder/>},
    {path:'/my-orders', element:<MyOrders/>},
    {path:'/my-orders/last', element:<MyOrder/>},
    {path:'/my-orders/:id', element:<MyOrder/>},
    {path:'/sign-in', element:<SignIn/>},
    {path:'/*', element:<NotFound/>},
  ])
  return routes
}


function App():JSX.Element {
  
  return (
    <>
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <MobileMenu/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
    </>
  )
}

export default App
