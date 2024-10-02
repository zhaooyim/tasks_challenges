import db from './connection.ts'

export async function getStudents() {
  const data = await db('students').select('*')
  return data
}

export async function getTeachers() {
  const data = await db('teachers').select('*')
  return data
}

export async function getStudentsAndTeachers() {
  const joinedData = await db('students')
    .join('students_teachers', 'students_teachers.student_id', 'students.id')
    .join('teachers', 'students_teachers.teacher_id', 'teachers.id')
    .select('students.name as studentName', 'teachers.name as teacherName')
  return joinedData
}

export async function getStudentsByTeacherId(teacherId: number) {
  const data = await db('students')
    .join('students_teachers', 'students_teachers.student_id', 'students.id')
    .where('students_teachers.teacher_id', teacherId)
    .select('*')
  return data
}

export async function getTeachersByStudentId(studentId: number) {
  const data = await db('teachers')
    .join('students_teachers', 'students_teachers.teacher_id', 'teachers.id')
    .where('students_teachers.student_id', studentId)
    .select('*')
  return data
}
export async function addNewStudent(data: { name: string; teacher: string }) {
  const { name, teacher } = data
  // when we insert the new student, we need to return the id which is created for that entry
  const studentReturn = await db('students').insert({ name }, ['id']) // the second parameter of insert allows
  // you to choose what column values to return.
  console.log(studentReturn) // output: [{ id: 4 }]
  const studentId = studentReturn[0].id

  // we also need to get the id of the correct teacher assigned to that student
  const teachReturn = await db('teachers').insert({ name: teacher }, ['id'])
  console.log(teachReturn) // output: [{ id: 4 }]
  const teacherId = teachReturn[0].id
  // then we need to add the new relationship between this student and the teacher
  // into our joining table
  await db('students_teachers').insert(
    {
      student_id: studentId,
      teacher_id: teacherId,
    },
    ['id'],
  )
}

// PRACTISE: Make a delete function for the `students_teachers`records:
