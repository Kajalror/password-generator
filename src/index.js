import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Menu from './Component/Menu/Menu';
import Reservation from './Component/Contact/Reservation';

const router = createBrowserRouter([

  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/home",
    element:<Home/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/menu",
    element:<Menu/>,
  },
  {
    path:"/reservation",
    element:<Reservation/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>
);
// reportWebVitals();



