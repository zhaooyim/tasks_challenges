import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
interface Affirmation {
  affirmation: string
}

function useAffirmation() {
  return useQuery({
    queryKey: ['affirmations'],
    queryFn: async () => {
      const res = await request.get('/api/v1/affirmations')
      return res.body as Affirmation
    },
  })
}

export default function AffirmationsPage() {
  const { data, isPending, isFetching, isError, error, refetch } =
    useAffirmation()

  if (isPending) {
    return <p>Wait.. </p>
  }

  if (isError) {
    return <p>My bad: {String(error)}</p>
  }

  return (
    <>
      <h2>TO AFFIRM U</h2>
      <p>{data.affirmation}</p>
      {isFetching && <p>FETCHING A NEW AFFIRMATION</p>}
      <button onClick={() => refetch()}>HIT ME AGAIN</button>
    </>
  )
}
