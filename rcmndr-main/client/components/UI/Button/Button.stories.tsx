import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import Background from '../Background/Background'

const meta: Meta<typeof Button> = {
  title: 'Primary Button',
  component: Button,
}

type Story = StoryObj<typeof Button>

export const MyPrimary: Story = {
  name: 'Primary',
  render: () => (
    <Background>
      <Button>Primary</Button>,
    </Background>
  ),
}

export default meta
