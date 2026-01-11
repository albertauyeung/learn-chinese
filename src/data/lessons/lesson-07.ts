import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-07',
  theme: 'mealtime-1',
  icon: '🍽️',
  title: {
    chinese: '吃飯時間（一）',
    english: 'Mealtime (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '吃', english: 'eat' },
    { id: 'vocab-02', character: '飯', english: 'rice, meal' },
    { id: 'vocab-03', character: '喝', english: 'drink' },
    { id: 'vocab-04', character: '水', english: 'water' },
    { id: 'vocab-05', character: '好吃', english: 'delicious' },
    { id: 'vocab-06', character: '飽', english: 'full' },
    { id: 'vocab-07', character: '餓', english: 'hungry' },
    { id: 'vocab-08', character: '要', english: 'want' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我吃飯。',
      english: 'I eat rice.',
      words: [
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat', isVocab: true },
        { character: '飯', english: 'rice', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我喝水。',
      english: 'I drink water.',
      words: [
        { character: '我', english: 'I' },
        { character: '喝', english: 'drink', isVocab: true },
        { character: '水', english: 'water', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '好吃！',
      english: 'Delicious!',
      words: [
        { character: '好吃', english: 'delicious', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我餓了。',
      english: 'I am hungry.',
      words: [
        { character: '我', english: 'I' },
        { character: '餓', english: 'hungry', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我吃飽了。',
      english: 'I am full.',
      words: [
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat', isVocab: true },
        { character: '飽', english: 'full', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '我要喝水。',
      english: 'I want to drink water.',
      words: [
        { character: '我', english: 'I' },
        { character: '要', english: 'want', isVocab: true },
        { character: '喝', english: 'drink', isVocab: true },
        { character: '水', english: 'water', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '吃飯',
      english: 'Eating',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '餓', english: 'hungry', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat', isVocab: true },
        { character: '飯', english: 'rice', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '好吃', english: 'delicious', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat', isVocab: true },
        { character: '飽', english: 'full', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 吃 mean?',
      options: ['drink', 'eat', 'sleep', 'play'],
      correctAnswer: 'eat',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 水 mean?',
      options: ['rice', 'food', 'water', 'milk'],
      correctAnswer: 'water',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'hungry'?",
      options: ['飽', '餓', '吃', '喝'],
      correctAnswer: '餓',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '吃', english: 'eat' },
        { chinese: '喝', english: 'drink' },
        { chinese: '水', english: 'water' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '好吃 means:',
      options: ['very hungry', 'delicious', 'very full', 'want to eat'],
      correctAnswer: 'delicious',
    },
  ],
};

export default lesson;
