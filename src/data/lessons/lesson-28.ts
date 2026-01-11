import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-28',
  theme: 'shopping-2',
  icon: '🛒',
  title: {
    chinese: '去購物（二）',
    english: 'Going Shopping (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '超市', english: 'supermarket' },
    { id: 'vocab-02', character: '商場', english: 'shopping mall' },
    { id: 'vocab-03', character: '價錢', english: 'price' },
    { id: 'vocab-04', character: '收銀', english: 'cashier' },
    { id: 'vocab-05', character: '找', english: 'find, look for' },
    { id: 'vocab-06', character: '賣', english: 'sell' },
    { id: 'vocab-07', character: '特價', english: 'on sale' },
    { id: 'vocab-08', character: '袋', english: 'bag' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我們去超市買東西。',
      english: 'We go to the supermarket to buy things.',
      words: [
        { character: '我們', english: 'we' },
        { character: '去', english: 'go' },
        { character: '超市', english: 'supermarket', isVocab: true },
        { character: '買', english: 'buy' },
        { character: '東西', english: 'things' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '這個多少錢？價錢是什麼？',
      english: 'How much is this? What is the price?',
      words: [
        { character: '這個', english: 'this' },
        { character: '多少', english: 'how much' },
        { character: '錢', english: 'money' },
        { character: '？', english: '', isPunctuation: true },
        { character: '價錢', english: 'price', isVocab: true },
        { character: '是', english: 'is' },
        { character: '什麼', english: 'what' },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '這個特價！',
      english: 'This is on sale!',
      words: [
        { character: '這個', english: 'this' },
        { character: '特價', english: 'on sale', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '請到收銀處付錢。',
      english: 'Please pay at the cashier.',
      words: [
        { character: '請', english: 'please' },
        { character: '到', english: 'to' },
        { character: '收銀', english: 'cashier', isVocab: true },
        { character: '處', english: 'place' },
        { character: '付錢', english: 'pay' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我找不到牛奶。',
      english: "I can't find the milk.",
      words: [
        { character: '我', english: 'I' },
        { character: '找', english: 'find', isVocab: true },
        { character: '不到', english: "can't" },
        { character: '牛奶', english: 'milk' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '要袋嗎？',
      english: 'Do you need a bag?',
      words: [
        { character: '要', english: 'need' },
        { character: '袋', english: 'bag', isVocab: true },
        { character: '嗎', english: '(question)' },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '去超市',
      english: 'Going to the Supermarket',
    },
    content: [
      [
        { character: '媽媽', english: 'mom' },
        { character: '和', english: 'and' },
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '超市', english: 'supermarket', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'we' },
        { character: '找', english: 'find', isVocab: true },
        { character: '好多', english: 'many' },
        { character: '東西', english: 'things' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '有', english: 'have' },
        { character: '特價', english: 'on sale', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '到', english: 'go to' },
        { character: '收銀', english: 'cashier', isVocab: true },
        { character: '付錢', english: 'pay' },
        { character: '。', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 超市 mean?',
      options: ['mall', 'supermarket', 'store', 'market'],
      correctAnswer: 'supermarket',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 特價 mean?',
      options: ['expensive', 'cheap', 'on sale', 'free'],
      correctAnswer: 'on sale',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'find'?",
      options: ['買', '賣', '找', '給'],
      correctAnswer: '找',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '超市', english: 'supermarket' },
        { chinese: '價錢', english: 'price' },
        { chinese: '收銀', english: 'cashier' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '袋 means:',
      options: ['box', 'bag', 'cart', 'basket'],
      correctAnswer: 'bag',
    },
  ],
};

export default lesson;
