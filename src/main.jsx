import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
// import './index.css'
import UI from '../componets/UI.jsx'
import Detail from '../componets/details.jsx'
import Error from '../componets/Error.jsx'
// import Addtem from '../componets/addtocart.jsx'
import Components from '../componets/add_to_cart_child.jsx'
import Usecust from '../componets/use_custom.jsx'
import Checkout from '../componets/checkoutpage.jsx'

const Router = createBrowserRouter([
  {path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<UI/>
      },
      {
        path:"/detail/:id",
        element:<Detail/>
      },
      {
        path:"/cart",
        element:<Components/>
      },
      ,{
        path:"/filterbooks",
        element:<Usecust/>
      },
      {
        path:"/checkout",
        element:<Checkout/>
      }
    ],
    errorElement:<Error/>
  },

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={Router}>

    </RouterProvider>
  </StrictMode>,
)
