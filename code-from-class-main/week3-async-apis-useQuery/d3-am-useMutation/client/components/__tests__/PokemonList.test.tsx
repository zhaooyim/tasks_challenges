//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import {
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react/pure'
import nock from 'nock'

import { renderRoute } from '../../test/setup.tsx'

nock.disableNetConnect()

const generationNum = 1
const mockGeneration = {
  main_region: { name: 'Kanto', url: 'https://pokeapi.co/api/v2/region/1/' },
  pokemon_species: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
    { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon-species/2/' },
  ],
}

describe('<PokemonList/>', () => {
  it('should render a loading indicator', async () => {
    // Arrange
    const scope = nock('https://pokeapi.co')
      .get(`/api/v2/generation/${generationNum}`)
      .reply(200, mockGeneration)

    // Act
    const { ...screen } = renderRoute('/')

    // Assert
    // const loading = await waitFor(() => screen.getByLabelText(/loading/i))
    const loading = await screen.findByLabelText(/loading/i)

    expect(loading).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })

  it('should render some Pokemon names', async () => {
    // Arrange
    const scope = nock('https://pokeapi.co')
      .get(`/api/v2/generation/${generationNum}`)
      .reply(200, mockGeneration)

    // Act
    const { ...screen } = renderRoute('/')

    // await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))

    // Assert
    const list = await screen.findByRole('list')
    const listItems = within(list)
      .getAllByRole('listitem')
      .map((li) => li.textContent)
    expect(listItems).toMatchInlineSnapshot(`
      [
        "bulbasaur",
        "charmander",
      ]
    `)
    expect(scope.isDone()).toBe(true)
  })

  it('should render an error message when things go wrong', async () => {
    // Arrange
    const scope = nock('https://pokeapi.co')
      .get(`/api/v2/generation/${generationNum}`)
      .reply(500)

    // Act
    const { ...screen } = renderRoute('/')

    await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i))

    // Assert
    const error = screen.getByText('An error occurred')

    expect(error).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })

  it('should render the correct pokemon when clicked', async () => {
    // Arrange
    const scope = nock('https://pokeapi.co')
      .get(`/api/v2/generation/${generationNum}`)
      .reply(200, mockGeneration)

    const mockCharmander = {
      name: 'charmander',
      types: [{ slot: 'type', type: { name: 'fire' } }],
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      },
      abilities: [{ slot: 'ability', ability: { name: 'blaze' } }],
      moves: [{ slot: 'move', move: { name: 'mega-punch' } }],
    }

    const pokemonScope = nock('https://pokeapi.co')
      .get(`/api/v2/pokemon/${mockCharmander.name}`)
      .reply(200, mockCharmander)

    // Act
    const { user, ...screen } = renderRoute('/')

    await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i))
    const list = screen.getByRole('list')
    const listItems = within(list).getAllByRole('link')

    // Act 2
    await user.click(listItems[1])

    // Assert
    const img = screen.getByAltText(/charmander/i) as HTMLImageElement
    expect(img.src).toBe(mockCharmander.sprites.front_default)
    expect(scope.isDone()).toBe(true)
    expect(pokemonScope.isDone()).toBe(true)
  })
})
