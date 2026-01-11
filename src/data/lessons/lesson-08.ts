import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-08',
  theme: 'shopping-1',
  icon: '🛒',
  title: {
    chinese: '去購物（一）',
    english: 'Going Shopping (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '買', english: 'buy' },
    { id: 'vocab-02', character: '錢', english: 'money' },
    { id: 'vocab-03', character: '多少', english: 'how much' },
    { id: 'vocab-04', character: '貴', english: 'expensive' },
    { id: 'vocab-05', character: '便宜', english: 'cheap' },
    { id: 'vocab-06', character: '商店', english: 'store, shop' },
    { id: 'vocab-07', character: '東西', english: 'things' },
    { id: 'vocab-08', character: '給', english: 'give' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我去商店。',
      english: 'I go to the store.',
      words: [
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '商店', english: 'store', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我買東西。',
      english: 'I buy things.',
      words: [
        { character: '我', english: 'I' },
        { character: '買', english: 'buy', isVocab: true },
        { character: '東西', english: 'things', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '多少錢？',
      english: 'How much money?',
      words: [
        { character: '多少', english: 'how much', isVocab: true },
        { character: '錢', english: 'money', isVocab: true },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '太貴了！',
      english: 'Too expensive!',
      words: [
        { character: '太', english: 'too' },
        { character: '貴', english: 'expensive', isVocab: true },
        { character: '了', english: '(emphasis)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '這個便宜。',
      english: 'This one is cheap.',
      words: [
        { character: '這個', english: 'this one' },
        { character: '便宜', english: 'cheap', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '給你錢。',
      english: 'Here is the money for you.',
      words: [
        { character: '給', english: 'give', isVocab: true },
        { character: '你', english: 'you' },
        { character: '錢', english: 'money', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '買東西',
      english: 'Buying Things',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '商店', english: 'store', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '要', english: 'want' },
        { character: '買', english: 'buy', isVocab: true },
        { character: '東西', english: 'things', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '多少', english: 'how much', isVocab: true },
        { character: '錢', english: 'money', isVocab: true },
        { character: '？', english: '', isPunctuation: true },
      ],
      [
        { character: '不', english: 'not' },
        { character: '貴', english: 'expensive', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 買 mean?',
      options: ['sell', 'buy', 'give', 'take'],
      correctAnswer: 'buy',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 錢 mean?',
      options: ['store', 'things', 'money', 'price'],
      correctAnswer: 'money',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'expensive'?",
      options: ['便宜', '貴', '多少', '商店'],
      correctAnswer: '貴',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '買', english: 'buy' },
        { chinese: '貴', english: 'expensive' },
        { chinese: '便宜', english: 'cheap' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '多少錢 means:',
      options: ['Give me money', 'How much money', 'Too expensive', 'Very cheap'],
      correctAnswer: 'How much money',
    },
  ],
};

export default lesson;
