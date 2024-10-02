import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { VehicleWithOwner } from '../../models/vehicle'

export default function VehicleOwners() {
  const {
    data: vehicles,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['vehicle'],
    queryFn: async () => {
      const data = await request.get(`/api/v1/vehicles`)
      return data.body as VehicleWithOwner[]
    },
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError || !vehicles) {
    return <p>error</p>
  }

  return (
    <>
      <h1>Blast from the past</h1>
      <br />
      <ul>
        {vehicles.map((vehicle) => {
          return (
            <li>
              {vehicle.make} {vehicle.model} - {vehicle.ownerName}
            </li>
          )
        })}
      </ul>
    </>
  )
}
