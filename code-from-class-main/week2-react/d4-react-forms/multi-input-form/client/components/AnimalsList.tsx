import { Animal } from '../models/scares'
export default function AnimalsList({ animals }: Animal) {
  return (
    <section>
      <h3>Daph&apos;s Animals🕷:</h3>
      <ul>
        {animals.map((animal, i) => (
          <li key={i}>
            <p>{animal}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

