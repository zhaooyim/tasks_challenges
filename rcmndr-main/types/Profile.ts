import * as z from 'zod'

export const profileDraftSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  nickname: z.string(),
  public: z.boolean(),
})

export const profileSchema = profileDraftSchema.extend({
  auth0Id: z.string(),
})

export type ProfileDraft = z.infer<typeof profileDraftSchema>
export type Profile = z.infer<typeof profileSchema>
