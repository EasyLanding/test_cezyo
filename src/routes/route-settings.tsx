import MainPage from '@pages/main-page'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  }
])
export default router
