import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-32',
  theme: 'dimsum-2',
  icon: '🥟',
  title: {
    chinese: '飲茶（二）',
    english: 'Dim Sum (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '叉燒包', english: 'BBQ pork bun' },
    { id: 'vocab-02', character: '腸粉', english: 'rice noodle roll' },
    { id: 'vocab-03', character: '蛋撻', english: 'egg tart' },
    { id: 'vocab-04', character: '鳳爪', english: 'chicken feet' },
    { id: 'vocab-05', character: '蒸', english: 'steam' },
    { id: 'vocab-06', character: '籠', english: 'steamer basket' },
    { id: 'vocab-07', character: '添', english: 'add more' },
    { id: 'vocab-08', character: '夠', english: 'enough' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我最喜歡叉燒包。',
      english: 'I like BBQ pork buns the most.',
      words: [
        { character: '我', english: 'I' },
        { character: '最', english: 'most' },
        { character: '喜歡', english: 'like' },
        { character: '叉燒包', english: 'BBQ pork bun', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '腸粉好滑。',
      english: 'Rice noodle roll is so smooth.',
      words: [
        { character: '腸粉', english: 'rice noodle roll', isVocab: true },
        { character: '好', english: 'so' },
        { character: '滑', english: 'smooth' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '蛋撻剛剛出爐。',
      english: 'The egg tarts just came out of the oven.',
      words: [
        { character: '蛋撻', english: 'egg tart', isVocab: true },
        { character: '剛剛', english: 'just' },
        { character: '出爐', english: 'came out of oven' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '一籠蝦餃。',
      english: 'One basket of shrimp dumplings.',
      words: [
        { character: '一', english: 'one' },
        { character: '籠', english: 'basket', isVocab: true },
        { character: '蝦餃', english: 'shrimp dumpling' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '要添茶嗎？',
      english: 'Want more tea?',
      words: [
        { character: '要', english: 'want' },
        { character: '添', english: 'add more', isVocab: true },
        { character: '茶', english: 'tea' },
        { character: '嗎', english: '(question)' },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '吃夠了！',
      english: 'I have eaten enough!',
      words: [
        { character: '吃', english: 'eat' },
        { character: '夠', english: 'enough', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '星期日飲茶',
      english: 'Sunday Dim Sum',
    },
    content: [
      [
        { character: '星期日', english: 'Sunday' },
        { character: '我們', english: 'we' },
        { character: '去', english: 'go' },
        { character: '飲茶', english: 'dim sum' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '叉燒包', english: 'BBQ pork bun', isVocab: true },
        { character: '好', english: 'so' },
        { character: '好吃', english: 'delicious' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '蛋撻', english: 'egg tart', isVocab: true },
        { character: '剛剛', english: 'just' },
        { character: '出爐', english: 'came out' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
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
      question: 'What is 叉燒包?',
      options: ['shrimp dumpling', 'BBQ pork bun', 'egg tart', 'rice roll'],
      correctAnswer: 'BBQ pork bun',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What is 蛋撻?',
      options: ['egg tart', 'egg roll', 'egg soup', 'egg bun'],
      correctAnswer: 'egg tart',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'add more'?",
      options: ['夠', '添', '蒸', '籠'],
      correctAnswer: '添',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the dim sum:',
      pairs: [
        { chinese: '叉燒包', english: 'BBQ pork bun' },
        { chinese: '腸粉', english: 'rice noodle roll' },
        { chinese: '蛋撻', english: 'egg tart' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '籠 means:',
      options: ['plate', 'bowl', 'steamer basket', 'cup'],
      correctAnswer: 'steamer basket',
    },
  ],
};

export default lesson;
