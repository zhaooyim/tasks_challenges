import { useState } from 'react'
import { Song } from '../../../types/Song'
import Button from '../UI/Button/Button'
import TextBox from '../UI/TextBox/TextBox'
import { useParams } from 'react-router-dom'

interface Props {
  formData: Song
  handleEditSong: (song: Song) => void
}
export default function EditSongForm({ formData, handleEditSong }: Props) {
  const { id } = useParams()
  const [form, setForm] = useState({
    id: id,
    title: formData.title,
    artist: formData.artist,
    genre: formData.genre,
    link: formData.link,
    description: formData.description,
  })
  //TODO: the current data from GET cannot be changed in form
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const value = e.target.value
    setForm({ ...form, [name]: value })
  }
  return (
    <div className="flex gap-4 flex-col justify-center items-center h-screen p-40">
      <h1>Edit Song</h1>
      <p>Fill in the details below to add a new song to your list</p>
      <TextBox
        onChange={(evt) => handleChange(evt)}
        name="title"
        value={form.title}
        placeholder="Song Title*"
        aria-label="song title"
        required={true}
      />
      <TextBox
        onChange={(evt) => handleChange(evt)}
        name="artist"
        value={form.artist}
        placeholder="Artist*"
        aria-label="artist"
        required={true}
      />
      <TextBox
        onChange={(evt) => handleChange(evt)}
        name="genre"
        value={form.genre || ''}
        placeholder="Genre*"
        aria-label="genre"
        required={true}
      />
      <TextBox
        onChange={(evt) => handleChange(evt)}
        name="link"
        value={form.link || ''}
        placeholder="Link"
        aria-label="link"
      />
      <TextBox
        onChange={(evt) => handleChange(evt)}
        name="description"
        value={form.description}
        placeholder="Description"
        aria-label="song description"
      />
      {/* TODO: Hook up button properly, mutate formData and save it to DB */}
      <Button onClick={() => handleEditSong(form as Song)}>SAVE</Button>
      <p>* = required</p>
    </div>
  )
}
