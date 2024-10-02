import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

interface StudentsTeachers {
  studentName: number
  teacherName: number
}
export default function Classes() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['students-teachers'],
    queryFn: async () => {
      const data = await request.get(`/api/v1/students-teachers`)
      return data.body
    },
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError || !data) {
    return <p>error</p>
  }

  return (
    <>
      <div className="text-slate-900 pl-64 pt-64 ">
        <h1 className="text-3xl font-extrabold">Schools IN</h1>
        <br />
        <table className="text-lg">
          <tr className="font-bold">
            <th>Students</th>
            <th>Teachers</th>
          </tr>
          {data.map((peops: StudentsTeachers) => {
            return (
              <>
                <tr className="font-medium">
                  <td>{peops.studentName}</td>
                  <td>{peops.teacherName}</td>
                </tr>
              </>
            )
          })}
        </table>
      </div>
    </>
  )
}
