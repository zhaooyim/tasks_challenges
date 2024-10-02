import type { Meta, StoryObj } from '@storybook/react'

import FriendListItem from './FriendListItem'
import Background from '../UI/Background/Background'
import { Friend } from '../../../types/User'

const meta: Meta<typeof FriendListItem> = {
  title: 'friendListItem',
  component: FriendListItem,
}

type Story = StoryObj<typeof FriendListItem>

const friend: Friend = {
  id: '1',
  nickname: 'Nickname',
  firstName: 'First Name',
}

export const friendListItem: Story = {
  name: 'FriendListItem',
  render: () => (
    <Background>
      <FriendListItem friend={friend} selectedId="" setSelect={() => {}} />
    </Background>
  ),
}

export default meta
