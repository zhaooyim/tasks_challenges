import { SongDraft } from '../../../types/Song'
import Button from '../UI/Button/Button'
import TextBox from '../UI/TextBox/TextBox'

const DEFAULT_TEXT_SONG_TITLE = 'The full title of the song'
const DEFAULT_TEXT_ARTIST = 'Name of the artist / singer / group'
const DEFAULT_TEXT_GENRE = 'Genre of music'
const DEFAULT_TEXT_LINK = 'A link so others can listen (optional)'
const DEFAULT_TEXT_DESC = 'What do you like about this song?'

interface Props {
  handleSubmit: (song: SongDraft) => void
}

export function AddSong(props: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const songTitleData = formData.get('title') as string
    const artistData = formData.get('artist') as string
    const genreData = formData.get('genre') as string
    const linkData = formData.get('link') as string
    const descData = formData.get('description') as string

    const form = {
      title: songTitleData,
      artist: artistData,
      genre: genreData,
      link: linkData,
      description: descData,
      userId: '', // userId will be set by client/apis/songs
    }

    props.handleSubmit(form)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <div className="space-y-2, text-white">
          <label htmlFor="title">Song title *</label>
          <TextBox
            type="text"
            name="title"
            id="title"
            required
            placeholder={DEFAULT_TEXT_SONG_TITLE}
          />
        </div>
        <div className="space-y-1, text-white">
          <label htmlFor="artist">Artist *</label>
          <TextBox
            type="text"
            name="artist"
            id="artist"
            required
            placeholder={DEFAULT_TEXT_ARTIST}
          />
        </div>
        <div className="space-y-2, text-white">
          <label htmlFor="genre">Genre</label>
          <TextBox
            type="text"
            name="genre"
            id="genre"
            placeholder={DEFAULT_TEXT_GENRE}
          />
        </div>
        <div className="space-y-2, text-white">
          <label htmlFor="link">Link</label>
          <TextBox
            type="text"
            name="link"
            id="link"
            placeholder={DEFAULT_TEXT_LINK}
          />
        </div>
        <div className="space-y-2, text-white">
          <label htmlFor="description">Description</label>
          <TextBox
            type="text"
            name="description"
            id="description"
            placeholder={DEFAULT_TEXT_DESC}
          />
        </div>
        <div className="mx-auto text-center">
          <Button>Save</Button>
        </div>
      </form>
    </div>
  )
}

export {
  DEFAULT_TEXT_ARTIST,
  DEFAULT_TEXT_DESC,
  DEFAULT_TEXT_GENRE,
  DEFAULT_TEXT_SONG_TITLE,
  DEFAULT_TEXT_LINK,
}
