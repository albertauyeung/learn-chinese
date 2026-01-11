import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-50',
  theme: 'clothes-3',
  icon: '👕',
  title: {
    chinese: '穿衣服（三）',
    english: 'Getting Dressed (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '款式', english: 'style' },
    { id: 'vocab-02', character: '尺碼', english: 'size' },
    { id: 'vocab-03', character: '合適', english: 'suitable, fit' },
    { id: 'vocab-04', character: '試', english: 'try' },
    { id: 'vocab-05', character: '配搭', english: 'match' },
    { id: 'vocab-06', character: '舒服', english: 'comfortable' },
    { id: 'vocab-07', character: '時尚', english: 'fashionable' },
    { id: 'vocab-08', character: '場合', english: 'occasion' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '這款式很時尚。',
      english: 'This style is very fashionable.',
      words: [
        { character: '這', english: 'this' },
        { character: '款式', english: 'style', isVocab: true },
        { character: '很', english: 'very' },
        { character: '時尚', english: 'fashionable', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '這個尺碼合適嗎？',
      english: 'Does this size fit?',
      words: [
        { character: '這個', english: 'this' },
        { character: '尺碼', english: 'size', isVocab: true },
        { character: '合適', english: 'fit', isVocab: true },
        { character: '嗎', english: '(question)' },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '可以試一下嗎？',
      english: 'Can I try it?',
      words: [
        { character: '可以', english: 'can' },
        { character: '試', english: 'try', isVocab: true },
        { character: '一下', english: 'a moment' },
        { character: '嗎', english: '(question)' },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '這兩件很配搭。',
      english: 'These two pieces match well.',
      words: [
        { character: '這', english: 'these' },
        { character: '兩', english: 'two' },
        { character: '件', english: 'pieces' },
        { character: '很', english: 'very' },
        { character: '配搭', english: 'match', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '衣服要穿得舒服。',
      english: 'Clothes should be worn comfortably.',
      words: [
        { character: '衣服', english: 'clothes' },
        { character: '要', english: 'should' },
        { character: '穿', english: 'wear' },
        { character: '得', english: '(complement marker)' },
        { character: '舒服', english: 'comfortable', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '不同場合穿不同衣服。',
      english: 'Wear different clothes for different occasions.',
      words: [
        { character: '不同', english: 'different' },
        { character: '場合', english: 'occasion', isVocab: true },
        { character: '穿', english: 'wear' },
        { character: '不同', english: 'different' },
        { character: '衣服', english: 'clothes' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '買新衫',
      english: 'Buying New Clothes',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '買', english: 'buy' },
        { character: '新', english: 'new' },
        { character: '衫', english: 'clothes' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '這', english: 'this' },
        { character: '款式', english: 'style', isVocab: true },
        { character: '好', english: 'very' },
        { character: '時尚', english: 'fashionable', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '試', english: 'try', isVocab: true },
        { character: '一下', english: 'a moment' },
        { character: '，', english: '', isPunctuation: true },
        { character: '很', english: 'very' },
        { character: '合適', english: 'fit', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '買', english: 'buy' },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 款式 mean?',
      options: ['color', 'style', 'price', 'brand'],
      correctAnswer: 'style',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 尺碼 mean?',
      options: ['color', 'style', 'size', 'price'],
      correctAnswer: 'size',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'try'?",
      options: ['配搭', '試', '合適', '舒服'],
      correctAnswer: '試',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '款式', english: 'style' },
        { chinese: '合適', english: 'fit' },
        { chinese: '時尚', english: 'fashionable' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '場合 means:',
      options: ['place', 'occasion', 'time', 'person'],
      correctAnswer: 'occasion',
    },
  ],
};

export default lesson;
