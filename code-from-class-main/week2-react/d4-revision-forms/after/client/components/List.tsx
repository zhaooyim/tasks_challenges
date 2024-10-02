import { Passenger } from '../types/passenger'

interface Props {
  passengers: Passenger[]
}

function List(props: Props) {
  return (
    <ul>
      {props.passengers.map((passenger) => (
        <div key={passenger.id}>
        <li >Passenger Name: {passenger.fullName}</li>
        <li>Bags: {passenger.noOfBags}</li>
        <li>Seat number: {passenger.seatNo}</li>
        </div>
      ))}
    </ul>
  )
}

export default List
