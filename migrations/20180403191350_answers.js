exports.up = function (knex, Promise) {
  return knex.schema.createTable('answers', (table) => {
    table.increments('id').primary()
    table.integer('questions_id').references('questions.id')
    table.string('response')
    table.string('correct')
  })
}

exports.down = function (knex, Promise) {
  return knex.scheme.dropTable('answers')
}
