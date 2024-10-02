import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'

import ProfileForm from './ProfileForm'
import { renderComponent } from '../../test-utils'
import { ProfileDraft } from '../../../types/Profile'

describe('ProfileForm', () => {
  it('should render form', () => {
    const handleSubmit = vi.fn()
    renderComponent(<ProfileForm handleSubmit={handleSubmit} />)

    expect(screen.getByLabelText('Nickname *')).toBeInTheDocument()
    expect(screen.getByLabelText('First Name *')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Visible to everyone')).toBeInTheDocument()
  })

  it('event handler should be called when form is submitted', async () => {
    const handleSubmit = vi.fn((form: ProfileDraft) => {
      expect(form).toMatchObject({
        firstName: 'dummy-firstname',
        lastName: 'dummy-lastname',
        nickname: 'dummy-nickname',
        public: true,
      })
    })

    const { user } = renderComponent(
      <ProfileForm handleSubmit={handleSubmit} />
    )

    await user.type(screen.getByLabelText('Nickname *'), 'dummy-nickname')
    await user.type(screen.getByLabelText('First Name *'), 'dummy-firstname')
    await user.type(screen.getByLabelText('Last Name'), 'dummy-lastname')
    await user.click(screen.getByLabelText('Visible to everyone'))

    const form = screen.getByRole('button', { name: 'Save' })
    await user.click(form)

    expect(handleSubmit).toHaveBeenCalled()
  })
})
