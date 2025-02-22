// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './components/Product';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <div className="App">
      {/* <Product/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
