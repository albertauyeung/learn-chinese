import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-53',
  theme: 'fruits-3',
  icon: '🍎',
  title: {
    chinese: '生果同菜（三）',
    english: 'Fruits and Vegetables (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '芒果', english: 'mango' },
    { id: 'vocab-02', character: '荔枝', english: 'lychee' },
    { id: 'vocab-03', character: '榴槤', english: 'durian' },
    { id: 'vocab-04', character: '青瓜', english: 'cucumber' },
    { id: 'vocab-05', character: '有機', english: 'organic' },
    { id: 'vocab-06', character: '本地', english: 'local' },
    { id: 'vocab-07', character: '季節', english: 'season' },
    { id: 'vocab-08', character: '成熟', english: 'ripe' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '芒果很甜！',
      english: 'Mango is very sweet!',
      words: [
        { character: '芒果', english: 'mango', isVocab: true },
        { character: '很', english: 'very' },
        { character: '甜', english: 'sweet' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '荔枝是夏天的生果。',
      english: 'Lychee is a summer fruit.',
      words: [
        { character: '荔枝', english: 'lychee', isVocab: true },
        { character: '是', english: 'is' },
        { character: '夏天', english: 'summer' },
        { character: '的', english: "'s" },
        { character: '生果', english: 'fruit' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '榴槤味道很特別。',
      english: 'Durian has a very unique taste.',
      words: [
        { character: '榴槤', english: 'durian', isVocab: true },
        { character: '味道', english: 'taste' },
        { character: '很', english: 'very' },
        { character: '特別', english: 'unique' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '這是有機蔬菜。',
      english: 'This is organic vegetable.',
      words: [
        { character: '這', english: 'this' },
        { character: '是', english: 'is' },
        { character: '有機', english: 'organic', isVocab: true },
        { character: '蔬菜', english: 'vegetable' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '這個芒果成熟了。',
      english: 'This mango is ripe.',
      words: [
        { character: '這個', english: 'this' },
        { character: '芒果', english: 'mango', isVocab: true },
        { character: '成熟', english: 'ripe', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '現在是什麼季節的生果？',
      english: 'What seasonal fruit is available now?',
      words: [
        { character: '現在', english: 'now' },
        { character: '是', english: 'is' },
        { character: '什麼', english: 'what' },
        { character: '季節', english: 'season', isVocab: true },
        { character: '的', english: "'s" },
        { character: '生果', english: 'fruit' },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '夏天生果',
      english: 'Summer Fruits',
    },
    content: [
      [
        { character: '夏天', english: 'summer' },
        { character: '到', english: 'arrived' },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '芒果', english: 'mango', isVocab: true },
        { character: '成熟', english: 'ripe', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '荔枝', english: 'lychee', isVocab: true },
        { character: '好', english: 'so' },
        { character: '甜', english: 'sweet' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '季節', english: 'seasonal', isVocab: true },
        { character: '生果', english: 'fruit' },
        { character: '最', english: 'most' },
        { character: '好吃', english: 'delicious' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 芒果 mean?',
      options: ['apple', 'mango', 'banana', 'orange'],
      correctAnswer: 'mango',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 有機 mean?',
      options: ['cheap', 'expensive', 'organic', 'imported'],
      correctAnswer: 'organic',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'ripe'?",
      options: ['成熟', '季節', '本地', '有機'],
      correctAnswer: '成熟',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the fruits:',
      pairs: [
        { chinese: '芒果', english: 'mango' },
        { chinese: '荔枝', english: 'lychee' },
        { chinese: '榴槤', english: 'durian' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '季節 means:',
      options: ['weather', 'season', 'year', 'month'],
      correctAnswer: 'season',
    },
  ],
};

export default lesson;
