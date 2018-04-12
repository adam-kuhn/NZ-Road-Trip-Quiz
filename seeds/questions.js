exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question: 'How many songs were on my playlist?', style: 'multi', topic: 'road'},
        {id: 2, question: 'Do I sing in the car?', style: 'multi', topic: 'road'},
        {id: 3, question: 'What was my go to food during the treks?', style: 'multi', topic: 'trekking'},
        {id: 4, question: 'What was the most roadkill I saw in one day?', style: 'multi', topic: 'road'},
        {id: 5, question: 'When I needed extra energy during the drive, what did I fuel up with?', style: 'multi', topic: 'road'},
        {id: 6, question: 'Which map best shows my route?', style: 'multi', topic: 'road'},
        {id: 7, question: 'How far many KM did I drive in the 13 days?', style: 'multi', topic: 'road'},
        {id: 8, question: 'Where was the most beautiful drive', style: 'multi', topic: 'road'},
        {id: 9, question: 'How many Justin Beiber songs were on the playlist?', style: 'multi', topic: 'road'},
        {id: 10, question: 'How many times did I press skip on the playlist', style: 'multi', topic: 'road'},
        {id: 11, question: 'How many speeding tickets did I get?', style: 'multi', topic: 'road'},
        {id: 12, question: 'How many pictures did I take?', style: 'multi', topic: 'picture'},
        {id: 13, question: 'How many selfies did I take?', style: 'multi', topic: 'picture'}
      ])
    })
}
