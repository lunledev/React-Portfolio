//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([

  {
    path: '/',
    element: <App/>,
    errorElement: <About/>,
    children: [
      {
        index: true,
        element: <About/>


      },
      {
        path: 'Contact',
        element: <Contact/>
      },

      



    ]

  }
])

// Render the RouterProvider component
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
