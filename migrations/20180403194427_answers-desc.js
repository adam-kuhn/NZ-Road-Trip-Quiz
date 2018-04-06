exports.up = function (knex, Promise) {
  return knex.schema.table('answers', (table) => {
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropColumn('description')
}
