import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Fire from './components/Fire'
import User from './components/User'
import { Layout } from './components/Layout'

export const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Fire />} />
    <Route path="user/:id" element={<User />} />
  </Route>
)

export const router = createBrowserRouter(routes)