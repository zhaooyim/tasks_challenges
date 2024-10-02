import request from 'superagent'
import { Affirmation } from '../../models/affirmation'

export async function getAffirmations(): Promise<Affirmation> {
  const response = await request.get('/api/v1/affirmation')
  console.log('front-end api', response.body);
  
  return response.body
}
