interface Props {
  name: string
  breed: string
  superpower: string
}

const Dog = (props: Props) => {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <h3 className="dog-name">{props.name}</h3>
          <span className="dog-breed">{props.breed}</span>
        </div>
        <button className="dog-superpower">{props.superpower}</button>
        <img
          src={`/images/${props.breed.toLowerCase()}.png`}
          alt={props.breed}
          data-testid="bulldog"
        />
      </div>
    </div>
  )
}

export default Dog
