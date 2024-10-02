import * as z from 'zod'

const songBasis = z.object({
  title: z.string(),
  artist: z.string(),
  genre: z.string().nullable(),
  link: z.string().nullable(),
  description: z.string().optional(),
})

export const songDraftSchema = songBasis.extend({
  userId: z.string(),
})

export const song = songBasis.extend({
  id: z.string(),
})

export interface SongId {
  id: number
}

export type SongDraft = z.infer<typeof songDraftSchema>
export type Song = z.infer<typeof song>
