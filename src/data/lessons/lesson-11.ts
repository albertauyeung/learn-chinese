import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-11',
  theme: 'restaurant-1',
  icon: '🍜',
  title: {
    chinese: '在餐廳（一）',
    english: 'At the Restaurant (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '餐廳', english: 'restaurant' },
    { id: 'vocab-02', character: '菜', english: 'dish, vegetable' },
    { id: 'vocab-03', character: '湯', english: 'soup' },
    { id: 'vocab-04', character: '碗', english: 'bowl' },
    { id: 'vocab-05', character: '筷子', english: 'chopsticks' },
    { id: 'vocab-06', character: '請', english: 'please' },
    { id: 'vocab-07', character: '謝謝', english: 'thank you' },
    { id: 'vocab-08', character: '好味', english: 'tasty' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我們去餐廳。',
      english: 'We go to the restaurant.',
      words: [
        { character: '我們', english: 'we' },
        { character: '去', english: 'go' },
        { character: '餐廳', english: 'restaurant', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '請給我一碗湯。',
      english: 'Please give me a bowl of soup.',
      words: [
        { character: '請', english: 'please', isVocab: true },
        { character: '給', english: 'give' },
        { character: '我', english: 'me' },
        { character: '一', english: 'one' },
        { character: '碗', english: 'bowl', isVocab: true },
        { character: '湯', english: 'soup', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '這道菜好味！',
      english: 'This dish is tasty!',
      words: [
        { character: '這', english: 'this' },
        { character: '道', english: '(measure word)' },
        { character: '菜', english: 'dish', isVocab: true },
        { character: '好味', english: 'tasty', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我用筷子吃飯。',
      english: 'I eat with chopsticks.',
      words: [
        { character: '我', english: 'I' },
        { character: '用', english: 'use' },
        { character: '筷子', english: 'chopsticks', isVocab: true },
        { character: '吃', english: 'eat' },
        { character: '飯', english: 'food' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '謝謝！',
      english: 'Thank you!',
      words: [
        { character: '謝謝', english: 'thank you', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '湯好熱。',
      english: 'The soup is very hot.',
      words: [
        { character: '湯', english: 'soup', isVocab: true },
        { character: '好', english: 'very' },
        { character: '熱', english: 'hot' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '去餐廳吃飯',
      english: 'Eating at a Restaurant',
    },
    content: [
      [
        { character: '我們', english: 'we' },
        { character: '去', english: 'go' },
        { character: '餐廳', english: 'restaurant', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '要', english: 'want' },
        { character: '一', english: 'one' },
        { character: '碗', english: 'bowl', isVocab: true },
        { character: '湯', english: 'soup', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '菜', english: 'dish', isVocab: true },
        { character: '好味', english: 'tasty', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '謝謝', english: 'thank you', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 餐廳 mean?',
      options: ['home', 'school', 'restaurant', 'store'],
      correctAnswer: 'restaurant',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 湯 mean?',
      options: ['rice', 'soup', 'noodles', 'tea'],
      correctAnswer: 'soup',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'chopsticks'?",
      options: ['碗', '筷子', '菜', '湯'],
      correctAnswer: '筷子',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '請', english: 'please' },
        { chinese: '謝謝', english: 'thank you' },
        { chinese: '好味', english: 'tasty' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '一碗湯 means:',
      options: ['one dish', 'one bowl of soup', 'hot soup', 'tasty soup'],
      correctAnswer: 'one bowl of soup',
    },
  ],
};

export default lesson;
