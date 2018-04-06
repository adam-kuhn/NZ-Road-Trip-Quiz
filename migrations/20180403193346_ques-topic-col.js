exports.up = function (knex, Promise) {
  return knex.schema.table('questions', (table) => {
    table.string('topic')
  })
}

exports.down = function (knex, Promise) {
  return knex.schems.dropColumn('topic')
}
