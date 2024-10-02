import db from './connection'
import { Song, SongDraft, SongId } from '../../types/Song'

export async function getSongs(user_id: string) {
  return (await db('songs')
    .where({ user_id })
    .andWhere('is_banned', null)
    .select('id', 'title', 'artist', 'genre', 'link')) as Song[]
}

export async function getSongById(songId: string) {
  return await db('songs')
    .where('id', Number(songId))
    .select('id', 'title', 'artist', 'genre', 'link')
    .first()
}

export async function updateSong(data: Song, id: number) {
  return await db('songs').where({ id }).update(data)
}

export async function deleteSong(id: number) {
  return await db('songs').where({ id }).del()
}

export async function insertSong(draft: SongDraft) {
  return (await db('songs')
    .returning('id')
    .insert([
      {
        user_id: draft.userId,
        genre: draft.genre,
        artist: draft.artist,
        link: draft.link,
        title: draft.title,
        description: draft.description,
      },
    ])) as SongId[]
}
