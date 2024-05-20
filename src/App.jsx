import React from 'react'
// import Navber from './components/Navber'
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider,
} from "react-router-dom";
import Rootlayout from './components/layers/Rootlayout';
import Error from './components/pages/Error';
import Contacts from './components/pages/Contacts';
import Singup from './components/pages/Singup';
import Login from './components/pages/Login';
import ProductDetails from './components/pages/ProductDetails';
import About from './components/pages/About';
import Account from './components/pages/Account';
import Cart from './components/pages/Cart';
import CheackOut from './components/pages/CheackOut';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Rootlayout/>}
      >
        <Route errorElement={<Error/>}></Route>
        <Route index element={<Home/>}></Route>
        <Route path='/products'  element={<Product/>}></Route>
        <Route path='/error' element={<Error/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
        <Route path='/sign/up' element={<Singup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products/details' element={<ProductDetails/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/my/account' element={<Account/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<CheackOut/>}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
