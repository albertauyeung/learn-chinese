import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-27',
  theme: 'mealtime-2',
  icon: '🍽️',
  title: {
    chinese: '吃飯時間（二）',
    english: 'Mealtime (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '早餐', english: 'breakfast' },
    { id: 'vocab-02', character: '午餐', english: 'lunch' },
    { id: 'vocab-03', character: '晚餐', english: 'dinner' },
    { id: 'vocab-04', character: '麵', english: 'noodles' },
    { id: 'vocab-05', character: '蛋', english: 'egg' },
    { id: 'vocab-06', character: '肉', english: 'meat' },
    { id: 'vocab-07', character: '飲品', english: 'drink' },
    { id: 'vocab-08', character: '夠', english: 'enough' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '早餐我吃蛋。',
      english: 'I eat eggs for breakfast.',
      words: [
        { character: '早餐', english: 'breakfast', isVocab: true },
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat' },
        { character: '蛋', english: 'egg', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '午餐吃麵。',
      english: 'I eat noodles for lunch.',
      words: [
        { character: '午餐', english: 'lunch', isVocab: true },
        { character: '吃', english: 'eat' },
        { character: '麵', english: 'noodles', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '晚餐有肉和菜。',
      english: 'Dinner has meat and vegetables.',
      words: [
        { character: '晚餐', english: 'dinner', isVocab: true },
        { character: '有', english: 'has' },
        { character: '肉', english: 'meat', isVocab: true },
        { character: '和', english: 'and' },
        { character: '菜', english: 'vegetables' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '你要什麼飲品？',
      english: 'What drink do you want?',
      words: [
        { character: '你', english: 'you' },
        { character: '要', english: 'want' },
        { character: '什麼', english: 'what' },
        { character: '飲品', english: 'drink', isVocab: true },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我吃夠了。',
      english: 'I have eaten enough.',
      words: [
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat' },
        { character: '夠', english: 'enough', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '肉好好吃！',
      english: 'The meat is delicious!',
      words: [
        { character: '肉', english: 'meat', isVocab: true },
        { character: '好', english: 'so' },
        { character: '好吃', english: 'delicious' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '三餐',
      english: 'Three Meals',
    },
    content: [
      [
        { character: '早餐', english: 'breakfast', isVocab: true },
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat' },
        { character: '蛋', english: 'egg', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '午餐', english: 'lunch', isVocab: true },
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat' },
        { character: '麵', english: 'noodles', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '晚餐', english: 'dinner', isVocab: true },
        { character: '有', english: 'have' },
        { character: '肉', english: 'meat', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat' },
        { character: '夠', english: 'enough', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 早餐 mean?',
      options: ['lunch', 'dinner', 'breakfast', 'snack'],
      correctAnswer: 'breakfast',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 麵 mean?',
      options: ['rice', 'noodles', 'bread', 'soup'],
      correctAnswer: 'noodles',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'meat'?",
      options: ['蛋', '麵', '肉', '菜'],
      correctAnswer: '肉',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the meals:',
      pairs: [
        { chinese: '早餐', english: 'breakfast' },
        { chinese: '午餐', english: 'lunch' },
        { chinese: '晚餐', english: 'dinner' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '吃夠了 means:',
      options: ['very hungry', 'eaten enough', 'want more', 'not tasty'],
      correctAnswer: 'eaten enough',
    },
  ],
};

export default lesson;
