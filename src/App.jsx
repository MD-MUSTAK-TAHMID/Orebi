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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Rootlayout/>}
      >
        <Route index element={<Home/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/error' element={<Error/>}></Route>
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
