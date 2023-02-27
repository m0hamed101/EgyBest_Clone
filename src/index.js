import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css';
import App from './App';
import { Movepage } from './components/Body/movepage/Movepage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Search from './components/Body/search/Search';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },{
        path:"test",
        element:[<Header/>,<Search/>,<Movepage/>,<Footer/>]
    }
  ]);



const root = ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);