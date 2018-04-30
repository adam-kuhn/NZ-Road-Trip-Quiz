exports.up = function (knex, Promise) {
  return knex.schema.table('questions', (table) => {
    table.string('image')
  })
}

exports.down = function (knex, Promise) {
  return knex.schems.dropColumn('image')
}
