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
        {id: 10, questions_Id: 3, response: 'Granola Bars', correct: 'no', description: 'A good guess, but nope.'},
        {id: 11, questions_Id: 4, response: '7', correct: 'no', description: '7 peices of roadkill seems like a lot does it not?.'},
        {id: 12, questions_Id: 4, response: '16', correct: 'no', description: 'Okay, wow that is a lot of dead animals. But not the right answer.'},
        {id: 13, questions_Id: 4, response: '4', correct: 'no', description: 'I wish it was this low.'},
        {id: 14, questions_Id: 4, response: '33', correct: 'yes', description: '33!? That is a huge number!!!...but sadly you are correct. I have never seen so much roadkill in my life! Pretty sad.'},
        {id: 15, questions_Id: 5, response: 'Doritos, Snickers, and Coke', correct: 'yes', description: 'Yup, this stuff is locket rocket fuel when you got long drives ahead of you.'},
        {id: 16, questions_Id: 5, response: 'canned pasta, nuts, Red Bull', correct: 'no', description: 'I did have a lot of cold canned pasta, but hard to eat while driving.'},
        {id: 17, questions_Id: 5, response: 'Doritos, Doritos, and Doritos', correct: 'no', description: 'This sounds like a dream...just missing pizza'},
        {id: 18, questions_Id: 5, response: 'Big Mac, Quarter Pounder, fries and a Coke', correct: 'no', description: 'Psh, I do not eat McDonalds, I am being healthy...'},
        {id: 19, questions_Id: 6, response: 'Some Map Image', correct: 'yes', description: 'Yay, you got it!'},
        {id: 20, questions_Id: 6, response: 'Some Map Image', correct: 'no', description: 'Not quite.'},
        {id: 21, questions_Id: 6, response: 'Some Map Image', correct: 'no', description: 'Nope.'},
        {id: 22, questions_Id: 6, response: 'Some Map Image', correct: 'no', description: 'You are not correct.'},
        {id: 23, questions_Id: 7, response: 'Some NUMBER', correct: 'yes', description: 'Nailed it!'},
        {id: 24, questions_Id: 7, response: 'Some NUMBER', correct: 'no', description: '...That is actually like driving to the moon.'},
        {id: 25, questions_Id: 7, response: 'Some NUMBER', correct: 'no', description: 'New Zealand is not that small'},
        {id: 26, questions_Id: 7, response: 'Some NUMBER', correct: 'no', description: 'Nadda'},
        {id: 27, questions_Id: 8, response: 'drive to Milford Sounds', correct: 'yes', description: 'This was by far the coolest drive. I stopped practically every 10 min to get out and look at the views.'},
        {id: 28, questions_Id: 8, response: 'Arthurs Pass', correct: 'no', description: 'This was an awesome drive, but is nothing compared to something else on the list.'},
        {id: 29, questions_Id: 8, response: 'Tongariro National Park', correct: 'no', description: 'Pretty mindblowing to see the volcanos pop out of the flat lands, but not epic enough.'},
        {id: 30, questions_Id: 8, response: 'West coast...', correct: 'no', description: 'Very Jurassic Park like, but still not as good as something else.'},
        {id: 31, questions_Id: 9, response: '0, I am obviously to cool to listen to Beibs', correct: 'no', description: 'Thanks, but no I am not that cool.'},
        {id: 32, questions_Id: 9, response: '10, I am a BELIEBER!', correct: 'no', description: 'Not quiet a Belieber either. But he has some cool stuff.'},
        {id: 33, questions_Id: 9, response: 'Correct number', correct: 'yes', description: 'And I know (or at least most) of the words.'},
        {id: 34, questions_Id: 9, response: '5', correct: 'no', description: 'Solid guess'},
        {id: 35, questions_Id: 10, response: '5', correct: 'no', description: 'No...Is it weird that I would keep track of something like this?'},
        {id: 36, questions_Id: 10, response: '0', correct: 'yes', description: 'When you are driving hours on end. There is no point in pressing skip'},
        {id: 37, questions_Id: 10, response: '12', correct: 'no', description: '12 IS divisble by 2 but NOT the amount of skips.'},
        {id: 38, questions_Id: 10, response: '9', correct: 'no', description: '9 is NOT divibisble by 2 and is NOT the amount of skips'},
        {id: 39, questions_Id: 11, response: '0', correct: 'no', description: 'Correct. Responsibility and safety is COOL!'},
        {id: 40, questions_Id: 11, response: '1', correct: 'no', description: 'You must think I am a rebel.'},
        {id: 41, questions_Id: 11, response: '2', correct: 'no', description: 'I sure diiiid...not get 2 speeding tickets.'},
        {id: 42, questions_Id: 11, response: '10', correct: 'no', description: 'Woah! You must thinkg I am crazy!'}
      ])
    })
}
