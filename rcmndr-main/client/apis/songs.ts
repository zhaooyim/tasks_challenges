import request from 'superagent'
import { Song, SongDraft } from '../../types/Song'

const baseUrl = '/api/v1/songs'

export async function getSongs(token: string, userId: string | undefined) {
  const id = userId ? userId : 'user'
  const response = await request
    .get(`${baseUrl}/${id}`)
    .set('Authorization', `Bearer ${token}`)
  return response.body as Song[]
}

export async function deleteSong({
  token,
  songId,
}: {
  token: string
  songId: string | undefined
}) {
  const id = songId
  const response = await request
    .delete(`${baseUrl}/${id}`)
    .set('Authorization', `Bearer ${token}`)
  return response.body
}

export async function addSong(
  token: string,
  userId: string,
  newSong: SongDraft
) {
  if (!newSong.userId || newSong.userId === '') {
    newSong.userId = userId
  }

  return request
    .post(`${baseUrl}`)
    .send({ ...newSong })
    .set('Authorization', `Bearer ${token}`)
}

export async function editSong(token: string, updatedSong: Song) {
  const res = await request
    .patch(`${baseUrl}/${updatedSong.id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(updatedSong)
  return res.body as Song[]
}

export async function getSongById(token: string, songId: string | undefined) {
  const response = await request
    .get(`${baseUrl}/song/${songId}`)
    .set('Authorization', `Bearer ${token}`)
  return response.body as Song
}
