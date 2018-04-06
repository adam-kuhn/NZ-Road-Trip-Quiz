exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question: 'How many songs were on my playlist', style: 'multi', topic: 'road'},
        {id: 2, question: 'Do I sing in the car?', style: 'multi', topic: 'road'},
        {id: 3, question: 'What was my go to food during the treks', style: 'multi', topic: 'trek'}
      ])
    })
}
