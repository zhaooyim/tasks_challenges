import type { Meta, StoryObj } from '@storybook/react'
import WaitingSpinner from './WaitingSpinner'
import Background from '../Background/Background'

const meta: Meta<typeof WaitingSpinner> = {
  title: 'Waiting Spinner',
  component: WaitingSpinner,
}

type Story = StoryObj<typeof WaitingSpinner>

export const spinner: Story = {
  name: 'Render a waiting spinner',
  render: () => (
    <Background>
      <WaitingSpinner />
    </Background>
  ),
}

export default meta
