import type { Lesson } from '../types';

const lesson01: Lesson = {
  id: 'lesson-01',
  theme: 'at-home-1',
  icon: '🏠',
  title: {
    chinese: '在家裡（一）',
    english: 'At Home (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '家', english: 'home' },
    { id: 'vocab-02', character: '爸爸', english: 'dad' },
    { id: 'vocab-03', character: '媽媽', english: 'mom' },
    { id: 'vocab-04', character: '我', english: 'I, me' },
    { id: 'vocab-05', character: '你', english: 'you' },
    { id: 'vocab-06', character: '好', english: 'good' },
    { id: 'vocab-07', character: '在', english: 'at, in' },
    { id: 'vocab-08', character: '是', english: 'is, am' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '這是我的家。',
      english: 'This is my home.',
      words: [
        { character: '這', english: 'this' },
        { character: '是', english: 'is', isVocab: true },
        { character: '我', english: 'my', isVocab: true },
        { character: '的', english: "'s" },
        { character: '家', english: 'home', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '爸爸在家。',
      english: 'Dad is at home.',
      words: [
        { character: '爸爸', english: 'dad', isVocab: true },
        { character: '在', english: 'at', isVocab: true },
        { character: '家', english: 'home', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '媽媽好。',
      english: 'Mom is good.',
      words: [
        { character: '媽媽', english: 'mom', isVocab: true },
        { character: '好', english: 'good', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '你好！',
      english: 'Hello!',
      words: [
        { character: '你', english: 'you', isVocab: true },
        { character: '好', english: 'good', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我是爸爸。',
      english: 'I am dad.',
      words: [
        { character: '我', english: 'I', isVocab: true },
        { character: '是', english: 'am', isVocab: true },
        { character: '爸爸', english: 'dad', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '媽媽在家。',
      english: 'Mom is at home.',
      words: [
        { character: '媽媽', english: 'mom', isVocab: true },
        { character: '在', english: 'at', isVocab: true },
        { character: '家', english: 'home', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '我的家',
      english: 'My Home',
    },
    content: [
      [
        { character: '這', english: 'this' },
        { character: '是', english: 'is', isVocab: true },
        { character: '我', english: 'my', isVocab: true },
        { character: '的', english: "'s" },
        { character: '家', english: 'home', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '爸爸', english: 'dad', isVocab: true },
        { character: '在', english: 'at', isVocab: true },
        { character: '家', english: 'home', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '媽媽', english: 'mom', isVocab: true },
        { character: '在', english: 'at', isVocab: true },
        { character: '家', english: 'home', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I', isVocab: true },
        { character: '好', english: 'good', isVocab: true },
        { character: '開心', english: 'happy' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 家 mean?',
      options: ['school', 'home', 'park', 'car'],
      correctAnswer: 'home',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 爸爸 mean?',
      options: ['mom', 'dad', 'sister', 'brother'],
      correctAnswer: 'dad',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'mom'?",
      options: ['爸爸', '媽媽', '我', '你'],
      correctAnswer: '媽媽',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '爸爸', english: 'dad' },
        { chinese: '媽媽', english: 'mom' },
        { chinese: '家', english: 'home' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '爸爸在家 means:',
      options: ['Dad is good', 'Dad is at home', 'Mom is at home', 'I am home'],
      correctAnswer: 'Dad is at home',
    },
  ],
};

export default lesson01;
