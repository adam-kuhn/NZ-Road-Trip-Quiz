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
        {id: 13, question: 'How many selfies did I take?', style: 'multi', topic: 'picture'},
        {id: 14, question: 'How many km did I travel on my longest trek?', style: 'multi', topic: 'trekking'},
        {id: 15, question: 'How many total km did I travel in my 8 days of trekking?', style: 'multi', topic: 'trekking'},
        {id: 16, question: 'In total how many vertical meters did I climb', style: 'multi', topic: 'trekking'},
        {id: 17, question: 'What was the most vertical I climbed in one day?', style: 'multi', topic: 'trekking'},
        {id: 18, question: 'What was my favorite hike?', style: 'multi', topic: 'trekking'},
        {id: 19, question: 'I had to doo the deed on a trek. What did I have to use for TP?', style: 'multi', topic: 'trekking'},
        {id: 20, question: 'What was the dumbest thing I did on one of my treks', style: 'multi', topic: 'trekking'},
        {id: 21, question: 'How many blisters did I end up wtih', style: 'multi', topic: 'trekking'},
        {id: 22, question: 'How many warm meals did I have at my campsite?', style: 'multi', topic: 'fun'},
        {id: 23, question: 'Did I write code in my tent?', style: 'multi', topic: 'fun'},
        {id: 24, question: 'When was the trip planned?', style: 'multi', topic: 'fun'},
        {id: 25, question: 'What crazy activity did I NOT do?', style: 'multi', topic: 'fun'},
        {id: 26, question: 'What was my favorite experience of the trip?', style: 'multi', topic: 'fun'},
        {id: 27, question: 'How many showers did I take?', style: 'multi', topic: 'fun'},
        {id: 28, question: 'How many Lord of the Rings locations did I visit?', style: 'multi', topic: 'fun'},
        {id: 29, question: 'Where do I want to go back to the most?', style: 'multi', topic: 'fun'},
        {id: 30, question: 'How long was my trip?', style: 'multi', topic: 'fun'},
        {id: 31, question: 'What was the best meal I had?', style: 'multi', topic: 'fun'},
        {id: 32, question: '/images/map_wrong3.png', style: 'multi-img', topic: 'picture'}
      ])
    })
}
