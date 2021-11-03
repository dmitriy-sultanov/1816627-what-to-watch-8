import {Comments} from '../types/comments';
import {Comment} from '../types/comments';

export const comment: Comment = {
  id: 1,
  user: {
    id: 1,
    name: 'Susana',
  },
  rating: '8,0',
  comment: 'Super movie, I liked it very much',
  'date': '2021-04-03T16:13:56.569Z',
};

export const comments: Comments = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Susana',
    },
    rating: '8,0',
    comment: 'Super movie, I liked it very much',
    'date': '2021-04-03T16:13:56.569Z',
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Daniel',
    },
    rating: '7,0',
    comment: 'I watched this movie for the third time, and every time as the first! Very good movie',
    date: '2021-05-09T15:16:46.569Z',
  },
  {
    id: 3,
    user: {
      id: 3,
      name: 'Michael',
    },
    rating: '6,0',
    comment: 'Amazing!!!',
    date: '2021-06-01T10:19:16.569Z',
  },
  {
    id: 4,
    user: {
      id: 4,
      name: 'Clark',
    },
    rating: '8,0',
    comment: 'I really liked this film, I advise everyone to watch it',
    date: '2021-06-16T07:00:48.569Z',
  },
  {
    id: 5,
    user: {
      id: 5,
      name: 'Jessica',
    },
    rating: '5,0',
    comment: 'Very interesting and exciting film',
    date: '2021-07-11T17:22:01.569Z',
  },
  {
    id: 6,
    user: {
      id: 6,
      name: 'Tom',
    },
    rating: '6,0',
    comment: 'Great movie, great acting!',
    date: '2021-08-13T21:28:31.569Z',
  },
  {
    id: 7,
    user: {
      id: 4,
      name: 'Clark',
    },
    rating: '8,0',
    comment: 'Very very good actors. Movie is very good. Everything is good',
    date: '2021-06-16T07:00:48.569Z',
  },
  {
    id: 8,
    user: {
      id: 5,
      name: 'Jessica',
    },
    rating: '5,0',
    comment: 'Das ist fantastish!!! Sehr gut! Ich liebe. Das ist fantastish!!! Sehr gut! Ich liebe. Das ist fantastish!!! Sehr gut! Ich liebe.',
    date: '2021-07-11T17:22:01.569Z',
  },
  {
    id: 9,
    user: {
      id: 6,
      name: 'Tom',
    },
    rating: '6,0',
    comment: 'The best actors work in the world! Music is awesome. You have to watch this film necessarily.',
    date: '2021-08-13T21:28:31.569Z',
  },
];
