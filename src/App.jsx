import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import { CartProvider } from './context/CartContext';
import HomePage from './Pages/HomePage.jsx/HomePage';
import MainLayout from './Layouts/MainLayout';
import CartPage from './Pages/CartPage/CartPage';


function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(

      <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Cart' element={<CartPage/>} />
      </Route>

    )
  )
  return (
    <CartProvider>
      <div className='App'>
        <RouterProvider router={routes} />
      </div>
    </CartProvider>
  );
}

export default App;
