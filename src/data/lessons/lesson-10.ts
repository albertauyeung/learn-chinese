import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-10',
  theme: 'clothes-1',
  icon: '👕',
  title: {
    chinese: '穿衣服（一）',
    english: 'Getting Dressed (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '衣服', english: 'clothes' },
    { id: 'vocab-02', character: '穿', english: 'wear' },
    { id: 'vocab-03', character: '鞋', english: 'shoes' },
    { id: 'vocab-04', character: '褲', english: 'pants' },
    { id: 'vocab-05', character: '紅', english: 'red' },
    { id: 'vocab-06', character: '藍', english: 'blue' },
    { id: 'vocab-07', character: '新', english: 'new' },
    { id: 'vocab-08', character: '漂亮', english: 'pretty, beautiful' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我穿衣服。',
      english: 'I put on clothes.',
      words: [
        { character: '我', english: 'I' },
        { character: '穿', english: 'wear', isVocab: true },
        { character: '衣服', english: 'clothes', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我穿紅色衣服。',
      english: 'I wear red clothes.',
      words: [
        { character: '我', english: 'I' },
        { character: '穿', english: 'wear', isVocab: true },
        { character: '紅', english: 'red', isVocab: true },
        { character: '色', english: 'color' },
        { character: '衣服', english: 'clothes', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '這雙鞋是藍色的。',
      english: 'These shoes are blue.',
      words: [
        { character: '這', english: 'this' },
        { character: '雙', english: 'pair' },
        { character: '鞋', english: 'shoes', isVocab: true },
        { character: '是', english: 'is' },
        { character: '藍', english: 'blue', isVocab: true },
        { character: '色的', english: 'colored' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '新衣服好漂亮！',
      english: 'The new clothes are so pretty!',
      words: [
        { character: '新', english: 'new', isVocab: true },
        { character: '衣服', english: 'clothes', isVocab: true },
        { character: '好', english: 'so' },
        { character: '漂亮', english: 'pretty', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我穿褲。',
      english: 'I wear pants.',
      words: [
        { character: '我', english: 'I' },
        { character: '穿', english: 'wear', isVocab: true },
        { character: '褲', english: 'pants', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '穿鞋出去。',
      english: 'Put on shoes and go out.',
      words: [
        { character: '穿', english: 'wear', isVocab: true },
        { character: '鞋', english: 'shoes', isVocab: true },
        { character: '出去', english: 'go out' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '穿新衣服',
      english: 'Wearing New Clothes',
    },
    content: [
      [
        { character: '今天', english: 'today' },
        { character: '我', english: 'I' },
        { character: '穿', english: 'wear', isVocab: true },
        { character: '新', english: 'new', isVocab: true },
        { character: '衣服', english: 'clothes', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '衣服', english: 'clothes', isVocab: true },
        { character: '是', english: 'is' },
        { character: '紅', english: 'red', isVocab: true },
        { character: '色的', english: 'colored' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '好', english: 'so' },
        { character: '漂亮', english: 'pretty', isVocab: true },
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
      question: 'What does 衣服 mean?',
      options: ['shoes', 'clothes', 'pants', 'hat'],
      correctAnswer: 'clothes',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 穿 mean?',
      options: ['buy', 'sell', 'wear', 'wash'],
      correctAnswer: 'wear',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'red'?",
      options: ['藍', '紅', '新', '漂亮'],
      correctAnswer: '紅',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '紅', english: 'red' },
        { chinese: '藍', english: 'blue' },
        { chinese: '新', english: 'new' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '漂亮 means:',
      options: ['ugly', 'old', 'pretty', 'big'],
      correctAnswer: 'pretty',
    },
  ],
};

export default lesson;
