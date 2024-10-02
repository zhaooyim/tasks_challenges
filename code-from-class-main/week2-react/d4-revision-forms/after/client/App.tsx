import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Layout from './components/Layout'
import Form from './components/Form'
import List from './components/List'
import { useState } from 'react'
import { Passenger } from './types/passenger'

function App() {
  const [passengers, setPassengers] = useState([] as Passenger[])
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout />}>
            <Route index element={<List passengers={passengers} />} />
            <Route
              path="/add"
              element={
                <Form total={passengers.length} setPassengers={setPassengers} />
              }
            />
            <Route
              path="/details/:id"
              element={<p>this should show the details page</p>}
            />
          </Route>
        )
      )}
    />
  )
}

export default App
