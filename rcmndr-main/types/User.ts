import * as zod from 'zod'

const friendSchema = zod.object({
  id: zod.string(),
  nickname: zod.string(),
  firstName: zod.string(),
})

export type Friend = zod.infer<typeof friendSchema>
// infer is a feature from the zod library,
// it Zod shines with TypeScript because it lets you infer types from zod schemas,
// This gives you the power to have runtime input validation,
// AND development time type safety protections (Typescript).
// Without having to write these different schema definitions twice.
// ZOD kills two birds with one (infered schema) stone.

const queryResultSchema = zod.object({
  auth0_id: zod.string(),
  first_name: zod.string(),
  last_name: zod.string(),
  nickname: zod.string(),
})

export type QueryResult = zod.infer<typeof queryResultSchema>
