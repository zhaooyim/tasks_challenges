import { useQuery } from '@tanstack/react-query'
import { getAffirmations } from '../api/affirmations'

export default function Affirmations() {
  const { data } = useQuery({
    queryKey: ['affirmation'],
    queryFn: getAffirmations,
  })

  console.log(data);
  
  return (
    <>
      <h2>Affirmation!</h2>
      <p>{data?.affirmation}</p>
    </>
  )
}
