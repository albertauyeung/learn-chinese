import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-31',
  theme: 'restaurant-2',
  icon: '🍜',
  title: {
    chinese: '在餐廳（二）',
    english: 'At the Restaurant (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '餐牌', english: 'menu' },
    { id: 'vocab-02', character: '落單', english: 'order' },
    { id: 'vocab-03', character: '埋單', english: 'pay the bill' },
    { id: 'vocab-04', character: '飲料', english: 'beverage' },
    { id: 'vocab-05', character: '甜品', english: 'dessert' },
    { id: 'vocab-06', character: '等', english: 'wait' },
    { id: 'vocab-07', character: '位', english: 'seat' },
    { id: 'vocab-08', character: '唔該', english: 'excuse me, please' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '請給我餐牌。',
      english: 'Please give me the menu.',
      words: [
        { character: '請', english: 'please' },
        { character: '給', english: 'give' },
        { character: '我', english: 'me' },
        { character: '餐牌', english: 'menu', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我要落單。',
      english: 'I want to order.',
      words: [
        { character: '我', english: 'I' },
        { character: '要', english: 'want' },
        { character: '落單', english: 'order', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '唔該，埋單。',
      english: 'Excuse me, the bill please.',
      words: [
        { character: '唔該', english: 'excuse me', isVocab: true },
        { character: '，', english: '', isPunctuation: true },
        { character: '埋單', english: 'the bill', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '你要什麼飲料？',
      english: 'What beverage do you want?',
      words: [
        { character: '你', english: 'you' },
        { character: '要', english: 'want' },
        { character: '什麼', english: 'what' },
        { character: '飲料', english: 'beverage', isVocab: true },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '甜品好好吃！',
      english: 'The dessert is delicious!',
      words: [
        { character: '甜品', english: 'dessert', isVocab: true },
        { character: '好', english: 'so' },
        { character: '好吃', english: 'delicious' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '請等一下，沒有位。',
      english: 'Please wait, no seats available.',
      words: [
        { character: '請', english: 'please' },
        { character: '等', english: 'wait', isVocab: true },
        { character: '一下', english: 'a moment' },
        { character: '，', english: '', isPunctuation: true },
        { character: '沒有', english: 'no' },
        { character: '位', english: 'seat', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '在餐廳吃飯',
      english: 'Eating at a Restaurant',
    },
    content: [
      [
        { character: '我們', english: 'we' },
        { character: '去', english: 'go' },
        { character: '餐廳', english: 'restaurant' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '唔該', english: 'excuse me', isVocab: true },
        { character: '，', english: '', isPunctuation: true },
        { character: '餐牌', english: 'menu', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '落單', english: 'order', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '甜品', english: 'dessert', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '埋單', english: 'pay the bill', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 餐牌 mean?',
      options: ['food', 'menu', 'plate', 'table'],
      correctAnswer: 'menu',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 埋單 mean?',
      options: ['order food', 'pay the bill', 'sit down', 'leave'],
      correctAnswer: 'pay the bill',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'dessert'?",
      options: ['飲料', '甜品', '餐牌', '位'],
      correctAnswer: '甜品',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '落單', english: 'order' },
        { chinese: '埋單', english: 'pay the bill' },
        { chinese: '甜品', english: 'dessert' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '唔該 means:',
      options: ['thank you', 'sorry', 'excuse me', 'goodbye'],
      correctAnswer: 'excuse me',
    },
  ],
};

export default lesson;
