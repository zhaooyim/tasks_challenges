export const up = function (knex) {
  return knex.schema.createTable('students_teachers', (table) => {
    table.increments('id').primary()
    table.integer('student_id').references('students.id')
    table.integer('teacher_id').references('teachers.id')
  })
}

export const down = function (knex) {
  return knex.schema.dropTable('students_teachers')
}
