import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-33',
  theme: 'fruits-2',
  icon: '🍎',
  title: {
    chinese: '生果同菜（二）',
    english: 'Fruits and Vegetables (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '葡萄', english: 'grapes' },
    { id: 'vocab-02', character: '西瓜', english: 'watermelon' },
    { id: 'vocab-03', character: '菜', english: 'vegetable' },
    { id: 'vocab-04', character: '白菜', english: 'bok choy' },
    { id: 'vocab-05', character: '番茄', english: 'tomato' },
    { id: 'vocab-06', character: '紅蘿蔔', english: 'carrot' },
    { id: 'vocab-07', character: '新鮮', english: 'fresh' },
    { id: 'vocab-08', character: '洗', english: 'wash' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '葡萄好甜！',
      english: 'Grapes are so sweet!',
      words: [
        { character: '葡萄', english: 'grapes', isVocab: true },
        { character: '好', english: 'so' },
        { character: '甜', english: 'sweet' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '夏天吃西瓜。',
      english: 'Eat watermelon in summer.',
      words: [
        { character: '夏天', english: 'summer' },
        { character: '吃', english: 'eat' },
        { character: '西瓜', english: 'watermelon', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '吃菜對身體好。',
      english: 'Eating vegetables is good for the body.',
      words: [
        { character: '吃', english: 'eat' },
        { character: '菜', english: 'vegetable', isVocab: true },
        { character: '對', english: 'for' },
        { character: '身體', english: 'body' },
        { character: '好', english: 'good' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '番茄是紅色的。',
      english: 'Tomatoes are red.',
      words: [
        { character: '番茄', english: 'tomato', isVocab: true },
        { character: '是', english: 'are' },
        { character: '紅色的', english: 'red' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '這些菜很新鮮。',
      english: 'These vegetables are very fresh.',
      words: [
        { character: '這些', english: 'these' },
        { character: '菜', english: 'vegetables', isVocab: true },
        { character: '很', english: 'very' },
        { character: '新鮮', english: 'fresh', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '吃之前要洗。',
      english: 'Wash before eating.',
      words: [
        { character: '吃', english: 'eat' },
        { character: '之前', english: 'before' },
        { character: '要', english: 'need to' },
        { character: '洗', english: 'wash', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '買生果',
      english: 'Buying Fruit',
    },
    content: [
      [
        { character: '媽媽', english: 'mom' },
        { character: '買', english: 'buy' },
        { character: '生果', english: 'fruit' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '葡萄', english: 'grapes', isVocab: true },
        { character: '好', english: 'so' },
        { character: '新鮮', english: 'fresh', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '西瓜', english: 'watermelon', isVocab: true },
        { character: '好', english: 'so' },
        { character: '大', english: 'big' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '吃', english: 'eat' },
        { character: '之前', english: 'before' },
        { character: '要', english: 'need to' },
        { character: '洗', english: 'wash', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 西瓜 mean?',
      options: ['apple', 'orange', 'watermelon', 'grapes'],
      correctAnswer: 'watermelon',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 新鮮 mean?',
      options: ['old', 'fresh', 'rotten', 'frozen'],
      correctAnswer: 'fresh',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'tomato'?",
      options: ['紅蘿蔔', '白菜', '番茄', '葡萄'],
      correctAnswer: '番茄',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the food:',
      pairs: [
        { chinese: '葡萄', english: 'grapes' },
        { chinese: '西瓜', english: 'watermelon' },
        { chinese: '番茄', english: 'tomato' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '洗 means:',
      options: ['cut', 'cook', 'wash', 'eat'],
      correctAnswer: 'wash',
    },
  ],
};

export default lesson;
