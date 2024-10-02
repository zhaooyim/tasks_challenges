import { Scare } from '../models/scares'
export default function ScaresList({ scares }: Scare) {
  return (
    <section>
      <h3>Gaby&apos;s Scares🕷:</h3>
      <ul>
        {scares.map((scare, i) => (
          <li key={i}>
            <p>{scare}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

