import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Layout from './components/Layout'
import FunWithNumbers from './components/FunWithNumbers'
import PixelParty from './components/PixelParty'
import NeglectThePumpkins from './components/NeglectThePumpkins'
import ListShenanegans from './components/ListShenanigans'
import Home from './components/Home'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home/>} />
    <Route path="numbers" element={<FunWithNumbers />} />
    <Route path="pixel/:number/:name" element={<PixelParty />} />
    <Route path="list" element={<ListShenanegans />} />
    <Route path="pumpkins" element={<NeglectThePumpkins />}/>
  </Route>
)

export const router = createBrowserRouter(routes)
