import { Scare } from '../models/scares'
export default function ScaresList({ scares }: Scare) {
  return (
    <section>
      <h2>Gaby&apos;s Scares🕷:</h2>
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
