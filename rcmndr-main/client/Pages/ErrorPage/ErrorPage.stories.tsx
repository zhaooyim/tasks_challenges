import type { Meta, StoryObj } from '@storybook/react'

import ErrorPage from './ErrorPage'
import Background from '../../components/UI/Background/Background'

const meta: Meta<typeof ErrorPage> = {
  component: ErrorPage,
}

type Story = StoryObj<typeof ErrorPage>

export const populated: Story = {
  name: 'Rendering error msg',
  render: () => (
    <Background>
      <ErrorPage />
    </Background>
  ),
}

export default meta
