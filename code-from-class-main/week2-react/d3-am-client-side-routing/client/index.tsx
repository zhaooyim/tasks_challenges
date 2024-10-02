import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './components/App'
import { router } from './routes'

const root = createRoot(document.getElementById('app') as HTMLElement)
// Previously we were using <App/>: 
// root.render(<App />) 

// Now we are using <RouterProvider router={router} /> 
root.render(<RouterProvider router={router} />)

