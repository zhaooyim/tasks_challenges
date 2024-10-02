import { Song } from '../../../types/Song'
import Icon from '../UI/Icon/Icon'

interface Props {
  song: Song
  handleDeleteSong: (songId: string) => void
  handleEditSong: (songId: string) => void
  mySongs: boolean
}

function SongListItem(props: Props) {
  const { song, handleDeleteSong, handleEditSong } = props

  return (
    <li className="list-none flex gap-4">
      <div className="self-center flex-none">
        <Icon>
          <i className="fa-solid fa-play text-black" />
        </Icon>
      </div>
      <div className="flex flex-col w-36 flex-auto">
        <h3 className="text-white">{song.title}</h3>
        <h4 className="text-xs text-lightPurple">{song.artist}</h4>
      </div>
      {props.mySongs && (
        <div className="flex flex-row gap-2 self-center flex-none">
          <button onClick={() => handleEditSong(song.id)}>
            <Icon>
              <i className="fa-solid fa-pen" />
            </Icon>
          </button>
          <button
            data-testid="deletebutton"
            onClick={() => handleDeleteSong(song.id)}
          >
            <Icon className="bg-warning">
              <i className="fa-solid fa-trash" />
            </Icon>
          </button>
        </div>
      )}
    </li>
  )
}

export default SongListItem
