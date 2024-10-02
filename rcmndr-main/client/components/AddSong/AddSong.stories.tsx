import type { Meta, StoryObj } from '@storybook/react'
import { AddSong } from './AddSong'
import Background from '../UI/Background/Background'

const meta: Meta<typeof AddSong> = {
  title: 'addSongForm',
  component: AddSong,
}

type Story = StoryObj<typeof AddSong>

export const addSongForm: Story = {
  name: 'Multiple empty text boxes for Add Song form',
  render: () => (
    <Background>
      <AddSong handleSubmit={() => {}} />
    </Background>
  ),
}

export default meta
