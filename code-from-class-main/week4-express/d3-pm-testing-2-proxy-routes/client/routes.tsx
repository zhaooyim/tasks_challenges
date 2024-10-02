import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import App from './components/App.tsx'
import PokemonPage from './pages/PokemonPage.tsx'
import Movie from './pages/MoviesPage.tsx'
import AffirmationsPage from './pages/AffirmationsPage.tsx'
import PuppyPage from './pages/PuppyPage.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="pokemon" element={<PokemonPage />} />
    <Route path="movies" element={<Movie />} />
    <Route path="affirmations" element={<AffirmationsPage />} />
    <Route path="puppies" element={<PuppyPage />} />
  </Route>,
)
