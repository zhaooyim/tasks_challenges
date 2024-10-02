import type { Meta, StoryObj } from '@storybook/react'

import TextBox from './TextBox'
import Background from '../Background/Background'

const meta: Meta<typeof TextBox> = {
  title: 'TextBox',
  component: TextBox,
}

type Story = StoryObj<typeof TextBox>

export const populated: Story = {
  name: 'Populated text box',
  render: () => (
    <Background>
      <div className="flex justify-center items-center h-screen p-40">
        <TextBox
          defaultValue="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          placeholder="Enter here"
        />
      </div>
    </Background>
  ),
}

export const emptyTextBox: Story = {
  name: 'Empty text box',
  render: () => (
    <Background>
      <div className="flex justify-center items-center h-screen p-40">
        <TextBox placeholder="Enter here" />
      </div>
    </Background>
  ),
}

export const multipleEmptyTextBoxes: Story = {
  name: 'Multiple empty text boxes',
  render: () => (
    <Background>
      <div className="flex gap-4 flex-col justify-center items-center h-screen p-40">
        <TextBox placeholder="The full title of the song" />
        <TextBox placeholder="Name of the artist / singer / group" />
        <TextBox placeholder="Genre of music (optional)" />
        <TextBox placeholder="A link so others can listen (optional)" />
      </div>
    </Background>
  ),
}

export const multiplePopulatedTextBoxes: Story = {
  name: 'Multiple populated text boxes',
  render: () => (
    <Background>
      <div className="flex gap-4 flex-col justify-center items-center h-screen p-40">
        <TextBox defaultValue="Reropolis" />
        <TextBox defaultValue="Zayne Murrel" />
        <TextBox defaultValue="Retrowave" />
        <TextBox defaultValue="https://www.youtube.com/watch?v=-JdOeRAqNBU" />
      </div>
    </Background>
  ),
}

export default meta
