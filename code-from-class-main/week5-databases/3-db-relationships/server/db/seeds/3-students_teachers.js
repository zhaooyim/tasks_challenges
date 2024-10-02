export async function seed(knex) {
  await knex('students_teachers').insert([
    { id: 1, student_id: 1, teacher_id: 1 },
    { id: 2, student_id: 2, teacher_id: 1 },
    { id: 3, student_id: 1, teacher_id: 3 },
  ])
}
