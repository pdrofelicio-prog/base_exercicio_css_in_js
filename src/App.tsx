import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'

import Home from './pages/Home'

import './global.css'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
