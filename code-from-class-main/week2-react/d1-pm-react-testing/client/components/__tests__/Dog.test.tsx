// @vitest-environment jsdom
import '../../test/setup.tsx'
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react/pure'

import Dog from '../Dog.tsx'

// Our props for testing:
// const name = 'Fido'
// const breed = 'bulldog'
// const superpower = 'can eat rocks'

describe('Dog component', () => {
  it('Fido has a heading with the name "Fido"', () => {
    //Arrange
    render(<Dog name="Fido" breed="bulldog" superpower="can eat rocks" />)
    // render(<Dog {...{ name, breed, superpower }} />)
    const dogHeading = screen.getByRole('heading', { level: 3 })
    console.log(dogHeading)
    //Act
    //Assert
    expect(dogHeading.textContent).toMatch('Fido')
  })

  it('Bruce has a button with the word "bark"', () => {
    //Arrange
    render(<Dog name="Bruce" breed="Bulldog" superpower="bark" />)
    const dogButton = screen.getByRole('button', { name: 'bark' })
    //Act
    //Assert
    expect(dogButton).toBeInTheDocument()
  })

  it('Fido has image of a bulldog', () => {
    //Arrange
    render(<Dog name="Fido" breed="bulldog" superpower="bark" />)
    const dogImage = screen.getByAltText('bulldog')
    //Act
    //Assert
    expect(dogImage).toHaveAttribute('src', '/images/bulldog.png')
  })
})
