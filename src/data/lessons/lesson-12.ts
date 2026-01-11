import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-12',
  theme: 'dimsum-1',
  icon: '🥟',
  title: {
    chinese: '飲茶（一）',
    english: 'Dim Sum (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '茶', english: 'tea' },
    { id: 'vocab-02', character: '點心', english: 'dim sum' },
    { id: 'vocab-03', character: '蝦餃', english: 'shrimp dumpling' },
    { id: 'vocab-04', character: '燒賣', english: 'siu mai' },
    { id: 'vocab-05', character: '包', english: 'bun' },
    { id: 'vocab-06', character: '熱', english: 'hot' },
    { id: 'vocab-07', character: '凍', english: 'cold' },
    { id: 'vocab-08', character: '飲', english: 'drink' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我們去飲茶。',
      english: 'We go for dim sum.',
      words: [
        { character: '我們', english: 'we' },
        { character: '去', english: 'go' },
        { character: '飲', english: 'drink', isVocab: true },
        { character: '茶', english: 'tea', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我要蝦餃。',
      english: 'I want shrimp dumplings.',
      words: [
        { character: '我', english: 'I' },
        { character: '要', english: 'want' },
        { character: '蝦餃', english: 'shrimp dumpling', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '燒賣好好吃！',
      english: 'Siu mai is so delicious!',
      words: [
        { character: '燒賣', english: 'siu mai', isVocab: true },
        { character: '好', english: 'so' },
        { character: '好吃', english: 'delicious' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '熱茶還是凍茶？',
      english: 'Hot tea or cold tea?',
      words: [
        { character: '熱', english: 'hot', isVocab: true },
        { character: '茶', english: 'tea', isVocab: true },
        { character: '還是', english: 'or' },
        { character: '凍', english: 'cold', isVocab: true },
        { character: '茶', english: 'tea', isVocab: true },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我喜歡吃包。',
      english: 'I like eating buns.',
      words: [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '吃', english: 'eat' },
        { character: '包', english: 'bun', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '點心好味。',
      english: 'Dim sum is tasty.',
      words: [
        { character: '點心', english: 'dim sum', isVocab: true },
        { character: '好味', english: 'tasty' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '飲茶',
      english: 'Yum Cha',
    },
    content: [
      [
        { character: '今天', english: 'today' },
        { character: '我們', english: 'we' },
        { character: '去', english: 'go' },
        { character: '飲', english: 'drink', isVocab: true },
        { character: '茶', english: 'tea', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '要', english: 'want' },
        { character: '蝦餃', english: 'shrimp dumpling', isVocab: true },
        { character: '和', english: 'and' },
        { character: '燒賣', english: 'siu mai', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '點心', english: 'dim sum', isVocab: true },
        { character: '好', english: 'so' },
        { character: '好吃', english: 'delicious' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '好', english: 'very' },
        { character: '開心', english: 'happy' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 茶 mean?',
      options: ['coffee', 'tea', 'water', 'juice'],
      correctAnswer: 'tea',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What is 蝦餃?',
      options: ['pork bun', 'shrimp dumpling', 'siu mai', 'egg tart'],
      correctAnswer: 'shrimp dumpling',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'hot'?",
      options: ['凍', '熱', '飲', '茶'],
      correctAnswer: '熱',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the dim sum:',
      pairs: [
        { chinese: '蝦餃', english: 'shrimp dumpling' },
        { chinese: '燒賣', english: 'siu mai' },
        { chinese: '包', english: 'bun' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '飲茶 means:',
      options: ['drink water', 'eat rice', 'have dim sum', 'buy tea'],
      correctAnswer: 'have dim sum',
    },
  ],
};

export default lesson;
