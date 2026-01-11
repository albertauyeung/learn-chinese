import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-48',
  theme: 'shopping-3',
  icon: '🛒',
  title: {
    chinese: '去購物（三）',
    english: 'Going Shopping (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '折扣', english: 'discount' },
    { id: 'vocab-02', character: '比較', english: 'compare' },
    { id: 'vocab-03', character: '質素', english: 'quality' },
    { id: 'vocab-04', character: '選擇', english: 'choose' },
    { id: 'vocab-05', character: '退換', english: 'return/exchange' },
    { id: 'vocab-06', character: '收據', english: 'receipt' },
    { id: 'vocab-07', character: '付款', english: 'payment' },
    { id: 'vocab-08', character: '值得', english: 'worth it' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '這個有折扣。',
      english: 'This has a discount.',
      words: [
        { character: '這個', english: 'this' },
        { character: '有', english: 'has' },
        { character: '折扣', english: 'discount', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '買之前要比較價錢。',
      english: 'Compare prices before buying.',
      words: [
        { character: '買', english: 'buy' },
        { character: '之前', english: 'before' },
        { character: '要', english: 'should' },
        { character: '比較', english: 'compare', isVocab: true },
        { character: '價錢', english: 'prices' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '這個質素很好。',
      english: 'This is good quality.',
      words: [
        { character: '這個', english: 'this' },
        { character: '質素', english: 'quality', isVocab: true },
        { character: '很', english: 'very' },
        { character: '好', english: 'good' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '你選擇哪一個？',
      english: 'Which one do you choose?',
      words: [
        { character: '你', english: 'you' },
        { character: '選擇', english: 'choose', isVocab: true },
        { character: '哪', english: 'which' },
        { character: '一個', english: 'one' },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '記得拿收據。',
      english: 'Remember to get the receipt.',
      words: [
        { character: '記得', english: 'remember' },
        { character: '拿', english: 'get' },
        { character: '收據', english: 'receipt', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '這個很值得買。',
      english: 'This is worth buying.',
      words: [
        { character: '這個', english: 'this' },
        { character: '很', english: 'very' },
        { character: '值得', english: 'worth', isVocab: true },
        { character: '買', english: 'buy' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '聰明購物',
      english: 'Smart Shopping',
    },
    content: [
      [
        { character: '買', english: 'buy' },
        { character: '東西', english: 'things' },
        { character: '要', english: 'should' },
        { character: '比較', english: 'compare', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '看', english: 'look at' },
        { character: '質素', english: 'quality', isVocab: true },
        { character: '和', english: 'and' },
        { character: '價錢', english: 'price' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '有', english: 'have' },
        { character: '折扣', english: 'discount', isVocab: true },
        { character: '更', english: 'even more' },
        { character: '好', english: 'good' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '值得', english: 'worth', isVocab: true },
        { character: '買', english: 'buy' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 折扣 mean?',
      options: ['tax', 'discount', 'price', 'fee'],
      correctAnswer: 'discount',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 質素 mean?',
      options: ['price', 'color', 'quality', 'size'],
      correctAnswer: 'quality',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'receipt'?",
      options: ['付款', '收據', '折扣', '選擇'],
      correctAnswer: '收據',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '比較', english: 'compare' },
        { chinese: '選擇', english: 'choose' },
        { chinese: '值得', english: 'worth it' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '退換 means:',
      options: ['buy more', 'return/exchange', 'pay cash', 'get discount'],
      correctAnswer: 'return/exchange',
    },
  ],
};

export default lesson;
