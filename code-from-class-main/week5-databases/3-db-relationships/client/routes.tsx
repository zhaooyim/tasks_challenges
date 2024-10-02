import { createRoutesFromElements, Route } from 'react-router-dom'

import Classes from './pages/Classes.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Classes />} />,
)
