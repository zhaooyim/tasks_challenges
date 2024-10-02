import { useNavigate } from 'react-router-dom'
import { Passenger } from '../types/passenger'

interface Props {
  total: number
  setPassengers: React.Dispatch<React.SetStateAction<Passenger[]>>
}

function Form(props: Props) {
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const target = event.currentTarget
    const form = new FormData(target)
    const fullName = form.get('fullName')?.valueOf() as string
    const seatNo = form.get('seatNo')?.valueOf() as string
    const noOfBags = form.get('noOfBags')?.valueOf() as number

    const newPassenger: Passenger = {
      id: props.total + 1,
      fullName,
      seatNo,
      noOfBags,
    }

    props.setPassengers((passengerState) => [...passengerState, newPassenger])
    navigate('/')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input id="fullname" name="fullName" />
        </div>
        <div>
          <label htmlFor="no-of-bags">No. of Bags</label>
          <input id="no-of-bags" type="number" name="noOfBags" />
        </div>
        <div>
          <label htmlFor="seatNo">Seat No.</label>
          <input id="seatNo" name="seatNo" />
        </div>
        <button>Add</button>
      </form>
    </div>
  )
}

export default Form
