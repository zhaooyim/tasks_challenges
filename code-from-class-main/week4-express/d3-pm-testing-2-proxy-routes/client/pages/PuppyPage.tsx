import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { Puppy } from '../../models/Puppy'

function usePuppies() {
  return useQuery({
    queryKey: ['puppy'],
    queryFn: async () => {
      const res = await request.get('/api/v1/puppies')
      return res.body as Puppy
    },
  })
}

export default function PuppyPage() {
  const { data, isPending, isError, error } = usePuppies()

  if (isPending) {
    return <p>Loading... </p>
  }

  if (isError) {
    return <p>My bad: {String(error)}</p>
  }

  const { name, breed, owner, image } = data

  return (
    <>
      <h2>Pupper</h2>
      <div className="puppy">
        <img className="img-circle" src={image} alt={name} />
        <h2>{name}</h2>
        <div>Breed: {breed}</div>
        <div>Owner: {owner}</div>
      </div>
    </>
  )
}
