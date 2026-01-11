import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-52',
  theme: 'dimsum-3',
  icon: '🥟',
  title: {
    chinese: '飲茶（三）',
    english: 'Dim Sum (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '馬拉糕', english: 'Ma Lai Go (steamed cake)' },
    { id: 'vocab-02', character: '牛肉球', english: 'beef balls' },
    { id: 'vocab-03', character: '春卷', english: 'spring roll' },
    { id: 'vocab-04', character: '糯米雞', english: 'sticky rice in lotus leaf' },
    { id: 'vocab-05', character: '傳統', english: 'traditional' },
    { id: 'vocab-06', character: '文化', english: 'culture' },
    { id: 'vocab-07', character: '味道', english: 'taste, flavor' },
    { id: 'vocab-08', character: '正宗', english: 'authentic' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '馬拉糕好鬆軟。',
      english: 'Ma Lai Go is so soft.',
      words: [
        { character: '馬拉糕', english: 'Ma Lai Go', isVocab: true },
        { character: '好', english: 'so' },
        { character: '鬆軟', english: 'soft' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '牛肉球很彈牙。',
      english: 'Beef balls are very bouncy.',
      words: [
        { character: '牛肉球', english: 'beef balls', isVocab: true },
        { character: '很', english: 'very' },
        { character: '彈牙', english: 'bouncy' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '炸春卷好脆。',
      english: 'Fried spring rolls are so crispy.',
      words: [
        { character: '炸', english: 'fried' },
        { character: '春卷', english: 'spring roll', isVocab: true },
        { character: '好', english: 'so' },
        { character: '脆', english: 'crispy' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '飲茶是傳統文化。',
      english: 'Dim sum is traditional culture.',
      words: [
        { character: '飲茶', english: 'dim sum' },
        { character: '是', english: 'is' },
        { character: '傳統', english: 'traditional', isVocab: true },
        { character: '文化', english: 'culture', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '這間的味道很正宗。',
      english: 'The taste here is very authentic.',
      words: [
        { character: '這間', english: 'here' },
        { character: '的', english: "'s" },
        { character: '味道', english: 'taste', isVocab: true },
        { character: '很', english: 'very' },
        { character: '正宗', english: 'authentic', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '糯米雞好香。',
      english: 'Sticky rice in lotus leaf is so fragrant.',
      words: [
        { character: '糯米雞', english: 'sticky rice in lotus leaf', isVocab: true },
        { character: '好', english: 'so' },
        { character: '香', english: 'fragrant' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '傳統飲茶',
      english: 'Traditional Dim Sum',
    },
    content: [
      [
        { character: '飲茶', english: 'dim sum' },
        { character: '是', english: 'is' },
        { character: '傳統', english: 'traditional', isVocab: true },
        { character: '文化', english: 'culture', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '點心', english: 'dim sum' },
        { character: '味道', english: 'taste', isVocab: true },
        { character: '很', english: 'very' },
        { character: '正宗', english: 'authentic', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '春卷', english: 'spring roll', isVocab: true },
        { character: '脆', english: 'crispy' },
        { character: '脆', english: 'crispy' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '好', english: 'so' },
        { character: '好吃', english: 'delicious' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What is 春卷?',
      options: ['dumpling', 'bun', 'spring roll', 'rice'],
      correctAnswer: 'spring roll',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 傳統 mean?',
      options: ['modern', 'traditional', 'new', 'foreign'],
      correctAnswer: 'traditional',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'authentic'?",
      options: ['傳統', '文化', '味道', '正宗'],
      correctAnswer: '正宗',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the dim sum:',
      pairs: [
        { chinese: '春卷', english: 'spring roll' },
        { chinese: '牛肉球', english: 'beef balls' },
        { chinese: '馬拉糕', english: 'steamed cake' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '味道 means:',
      options: ['color', 'taste', 'smell', 'texture'],
      correctAnswer: 'taste',
    },
  ],
};

export default lesson;
