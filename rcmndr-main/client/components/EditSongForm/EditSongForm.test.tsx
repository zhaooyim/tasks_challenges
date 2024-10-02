import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'

import EditSongForm from './EditSongForm'
import { renderComponent } from '../../test-utils'
import { Song } from '../../../types/Song'

describe('EditSongForm', () => {
  const formData = {
    id: '1',
    title: 'test',
    artist: 'test artist',
    genre: 'test genre',
    link: 'test link',
    description: 'song description',
  }
  it('should render form', () => {
    const handleEditSong = vi.fn()
    renderComponent(<EditSongForm {...{ formData, handleEditSong }} />)

    expect(screen.getByLabelText('song title')).toBeInTheDocument()
    expect(screen.getByLabelText('artist')).toBeInTheDocument()
    expect(screen.getByLabelText('genre')).toBeInTheDocument()
    expect(screen.getByLabelText('link')).toBeInTheDocument()
    expect(screen.getByLabelText('song description')).toBeInTheDocument()
  })

  it('event handler should be called when form is submitted', async () => {
    const editedFormData = {
      title: 'test edit',
      artist: 'test artist edit',
      genre: 'test genre edit',
      link: 'test link edit',
      description: 'song description edit',
    }
    const handleEditSong = vi.fn((form: Song) => {
      expect(form).toMatchObject(editedFormData)
    })

    const { user } = renderComponent(
      <EditSongForm {...{ formData, handleEditSong }} />
    )

    await user.type(screen.getByLabelText('song title'), ' edit')
    await user.type(screen.getByLabelText('artist'), ' edit')
    await user.type(screen.getByLabelText('genre'), ' edit')
    await user.type(screen.getByLabelText('link'), ' edit')
    await user.type(screen.getByLabelText('song description'), ' edit')

    const form = screen.getByRole('button')
    await user.click(form)

    expect(handleEditSong).toHaveBeenCalled()
  })
})
