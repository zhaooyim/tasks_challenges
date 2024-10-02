import { createRoutesFromElements, Route } from 'react-router-dom'

import VehicleOwners from './pages/VehicleOwners.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<VehicleOwners />} />,
)
