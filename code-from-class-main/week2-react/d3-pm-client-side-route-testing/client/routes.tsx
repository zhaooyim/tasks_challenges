import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Layout from './components/Layout'
import FunWithNumbers from './components/FunWithNumbers'
import PixelParty from './components/PixelParty'
import NeglectThePumpkins from './components/NeglectThePumpkins'
import ListShenanegans from './components/ListShenanegans'

export const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<p>Home!</p>} />
    <Route path="numbers" element={<FunWithNumbers />} />
    <Route path="pixel/:number" element={<PixelParty />} />
    <Route path="list" element={<ListShenanegans />} />
    <Route path="pumpkins" element={<NeglectThePumpkins />}>
    </Route>
  </Route>
)

export const router = createBrowserRouter(routes)