import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-13',
  theme: 'fruits-1',
  icon: '🍎',
  title: {
    chinese: '生果同菜（一）',
    english: 'Fruits and Vegetables (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '生果', english: 'fruit' },
    { id: 'vocab-02', character: '蘋果', english: 'apple' },
    { id: 'vocab-03', character: '香蕉', english: 'banana' },
    { id: 'vocab-04', character: '橙', english: 'orange' },
    { id: 'vocab-05', character: '甜', english: 'sweet' },
    { id: 'vocab-06', character: '酸', english: 'sour' },
    { id: 'vocab-07', character: '好食', english: 'yummy' },
    { id: 'vocab-08', character: '想', english: 'want, think' },
    { id: 'vocab-09', character: '西瓜', english: 'watermelon' },
    { id: 'vocab-10', character: '提子', english: 'grapes' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我吃生果。',
      english: 'I eat fruit.',
      words: [
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat' },
        { character: '生果', english: 'fruit', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '蘋果好甜。',
      english: 'The apple is very sweet.',
      words: [
        { character: '蘋果', english: 'apple', isVocab: true },
        { character: '好', english: 'very' },
        { character: '甜', english: 'sweet', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我喜歡香蕉。',
      english: 'I like bananas.',
      words: [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '香蕉', english: 'banana', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '橙有點酸。',
      english: 'The orange is a bit sour.',
      words: [
        { character: '橙', english: 'orange', isVocab: true },
        { character: '有點', english: 'a bit' },
        { character: '酸', english: 'sour', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '生果好食！',
      english: 'Fruit is yummy!',
      words: [
        { character: '生果', english: 'fruit', isVocab: true },
        { character: '好食', english: 'yummy', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '我想吃蘋果。',
      english: 'I want to eat an apple.',
      words: [
        { character: '我', english: 'I' },
        { character: '想', english: 'want', isVocab: true },
        { character: '吃', english: 'eat' },
        { character: '蘋果', english: 'apple', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-07',
      chinese: '西瓜好大！',
      english: 'The watermelon is so big!',
      words: [
        { character: '西瓜', english: 'watermelon', isVocab: true },
        { character: '好', english: 'so' },
        { character: '大', english: 'big' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-08',
      chinese: '提子好甜好好吃。',
      english: 'The grapes are sweet and delicious.',
      words: [
        { character: '提子', english: 'grapes', isVocab: true },
        { character: '好', english: 'very' },
        { character: '甜', english: 'sweet', isVocab: true },
        { character: '好', english: 'very' },
        { character: '好吃', english: 'delicious' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '吃生果',
      english: 'Eating Fruit',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '吃', english: 'eat' },
        { character: '生果', english: 'fruit', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '蘋果', english: 'apple', isVocab: true },
        { character: '好', english: 'very' },
        { character: '甜', english: 'sweet', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '香蕉', english: 'banana', isVocab: true },
        { character: '好食', english: 'yummy', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '生果', english: 'fruit', isVocab: true },
        { character: '好', english: 'very' },
        { character: '健康', english: 'healthy' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 生果 mean?',
      options: ['vegetable', 'fruit', 'meat', 'rice'],
      correctAnswer: 1,
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 蘋果 mean?',
      options: ['orange', 'banana', 'apple', 'grape'],
      correctAnswer: 2,
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'sweet'?",
      options: ['酸', '甜', '好食', '想'],
      correctAnswer: 1,
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the fruits:',
      pairs: [
        { chinese: '蘋果', english: 'apple' },
        { chinese: '香蕉', english: 'banana' },
        { chinese: '橙', english: 'orange' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '好甜 means:',
      options: ['very sour', 'very sweet', 'very yummy', 'very big'],
      correctAnswer: 1,
    },
    {
      id: 'q6',
      type: 'multiple-choice',
      question: 'What does 西瓜 mean?',
      options: ['apple', 'grapes', 'watermelon', 'banana'],
      correctAnswer: 2,
    },
    {
      id: 'q7',
      type: 'multiple-choice',
      question: 'What does 提子 mean?',
      options: ['grapes', 'orange', 'watermelon', 'apple'],
      correctAnswer: 0,
    },
    {
      id: 'q8',
      type: 'multiple-choice',
      question: "Which word means 'sour'?",
      options: ['甜', '好食', '酸', '想'],
      correctAnswer: 2,
    },
  ],
};

export default lesson;
