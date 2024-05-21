import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/route-settings.tsx'
import { Provider } from 'react-redux'
import store from '@store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div style={{ display: 'flex', width: '100%' }}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </div>
)
