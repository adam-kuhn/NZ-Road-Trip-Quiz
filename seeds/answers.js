exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {id: 1, questions_Id: 1, response: '106', correct: 'no', description: '...nope.'},
        {id: 2, questions_Id: 1, response: '125', correct: 'yes', description: 'woohoo!'},
        {id: 3, questions_Id: 1, response: '83', correct: 'no', description: 'nice try.'},
        {id: 4, questions_Id: 1, response: '117', correct: 'no', description: 'getting close, but nah.'},
        {id: 5, questions_Id: 2, response: 'Yup', correct: 'yes', description: 'Good thing I was alone, because I am not a good singer.'},
        {id: 6, questions_Id: 2, response: 'Not a chance', correct: 'no', description: 'If you are riding with me, you probably wish I did not sing...'},
        {id: 7, questions_Id: 3, response: 'Jelly Bellies', correct: 'no', description: 'had to resort to these once, but not a go to.'},
        {id: 8, questions_Id: 3, response: 'Peanut Butter Sandwiches', correct: 'yes', description: 'Yup, peanut butter is my JAM...just mising jam. And if I was real lucky I could throw in a banana too!'},
        {id: 9, questions_Id: 3, response: 'Trail Mix', correct: 'no', description: 'I am addicted to trail-mix, so I do not buy it. It would not last long enough.'},
        {id: 10, questions_Id: 3, response: 'Granola Bars', correct: 'no', description: 'A good guess, but nope.'}
      ])
    })
}
