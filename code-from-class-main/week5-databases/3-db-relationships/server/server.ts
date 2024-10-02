import express from 'express'
import * as db from './db/index.ts'
const server = express()
export default server

server.use(express.json())

server.get('/api/v1/students-teachers', async (req, res) => {
  try {
    const data = await db.getStudentsAndTeachers()
    // const data = [{ studentName: 'fake data', teacherName: 'fake data' }]
    res.json(data)
  } catch (err) {
    console.error(err)
  }
})

server.post('/api/v1/students-teachers', async (req, res) => {
  try {
    const data = await db.addNewStudent(req.body)
    res.json(data)
  } catch (err) {
    console.error(err)
  }
})
