import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ! Configurando Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importar as páginas(rotas)
import Home from './routes/Home.tsx'
import Contact from './routes/Contact.tsx'
import ErroPage from './routes/ErroPage.tsx'
import ContactDetails from './routes/ContactDetails.tsx'

// * | Configuração básica sem children(sem respeitar a ordem (do App pra depois poder chamar o Outlet, ou seja, o App vai ser o pai e depois que vem os outros, irá ter uma hierarquia)) |
//const router = createBrowserRouter([
//  {
//    path: "/", // Path que é o caminho até a página (obs.: é "/" porque é a home)
//    element: <Home /> // Element é a página importada
//  },
//  {
//    path: "contact",
//    element: <Contact />
//  }
//])

// * Configuração com o Children (para usar o Outlet)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />, // 3. Página de erro: caso o usuário vá para alguma página que não tenha, acontece este erro
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact", 
        element: <Contact />
      },
      // * Nested Routes -> carregar coisas de APIs e etc. 
      {
        path: "contact/:id", // -> Dependendo do id, vai aparecer algo
        element: <ContactDetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> // Passo a prop router e o valor a função router
  </React.StrictMode>,
)
