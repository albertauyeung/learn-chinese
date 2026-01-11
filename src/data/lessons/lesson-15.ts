import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-15',
  theme: 'cooking-1',
  icon: '🍳',
  title: {
    chinese: '煮飯（一）',
    english: 'Cooking (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '煮', english: 'cook' },
    { id: 'vocab-02', character: '切', english: 'cut' },
    { id: 'vocab-03', character: '洗', english: 'wash' },
    { id: 'vocab-04', character: '鍋', english: 'pot, pan' },
    { id: 'vocab-05', character: '火', english: 'fire' },
    { id: 'vocab-06', character: '幫', english: 'help' },
    { id: 'vocab-07', character: '做', english: 'make, do' },
    { id: 'vocab-08', character: '小心', english: 'be careful' },
    { id: 'vocab-09', character: '炒', english: 'stir-fry' },
    { id: 'vocab-10', character: '蒸', english: 'steam' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '媽媽煮飯。',
      english: 'Mom cooks.',
      words: [
        { character: '媽媽', english: 'mom' },
        { character: '煮', english: 'cook', isVocab: true },
        { character: '飯', english: 'food' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我幫媽媽洗菜。',
      english: 'I help mom wash vegetables.',
      words: [
        { character: '我', english: 'I' },
        { character: '幫', english: 'help', isVocab: true },
        { character: '媽媽', english: 'mom' },
        { character: '洗', english: 'wash', isVocab: true },
        { character: '菜', english: 'vegetables' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '小心！火好熱。',
      english: 'Be careful! The fire is hot.',
      words: [
        { character: '小心', english: 'be careful', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
        { character: '火', english: 'fire', isVocab: true },
        { character: '好', english: 'very' },
        { character: '熱', english: 'hot' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '爸爸切菜。',
      english: 'Dad cuts vegetables.',
      words: [
        { character: '爸爸', english: 'dad' },
        { character: '切', english: 'cut', isVocab: true },
        { character: '菜', english: 'vegetables' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '用鍋煮湯。',
      english: 'Use a pot to cook soup.',
      words: [
        { character: '用', english: 'use' },
        { character: '鍋', english: 'pot', isVocab: true },
        { character: '煮', english: 'cook', isVocab: true },
        { character: '湯', english: 'soup' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '我想做蛋糕。',
      english: 'I want to make cake.',
      words: [
        { character: '我', english: 'I' },
        { character: '想', english: 'want' },
        { character: '做', english: 'make', isVocab: true },
        { character: '蛋糕', english: 'cake' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-07',
      chinese: '爸爸炒菜。',
      english: 'Dad stir-fries vegetables.',
      words: [
        { character: '爸爸', english: 'dad' },
        { character: '炒', english: 'stir-fry', isVocab: true },
        { character: '菜', english: 'vegetables' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-08',
      chinese: '媽媽蒸魚。',
      english: 'Mom steams fish.',
      words: [
        { character: '媽媽', english: 'mom' },
        { character: '蒸', english: 'steam', isVocab: true },
        { character: '魚', english: 'fish' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '幫媽媽煮飯',
      english: 'Helping Mom Cook',
    },
    content: [
      [
        { character: '媽媽', english: 'mom' },
        { character: '煮', english: 'cook', isVocab: true },
        { character: '飯', english: 'food' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '幫', english: 'help', isVocab: true },
        { character: '媽媽', english: 'mom' },
        { character: '洗', english: 'wash', isVocab: true },
        { character: '菜', english: 'vegetables' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '小心', english: 'be careful', isVocab: true },
        { character: '火', english: 'fire', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
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
      question: 'What does 煮 mean?',
      options: ['eat', 'cook', 'drink', 'buy'],
      correctAnswer: 1,
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 洗 mean?',
      options: ['cut', 'cook', 'wash', 'eat'],
      correctAnswer: 2,
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'help'?",
      options: ['做', '幫', '煮', '切'],
      correctAnswer: 1,
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '煮', english: 'cook' },
        { chinese: '切', english: 'cut' },
        { chinese: '洗', english: 'wash' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '小心 means:',
      options: ['be happy', 'be careful', 'be fast', 'be quiet'],
      correctAnswer: 1,
    },
    {
      id: 'q6',
      type: 'multiple-choice',
      question: 'What does 炒 mean?',
      options: ['boil', 'steam', 'stir-fry', 'bake'],
      correctAnswer: 2,
    },
    {
      id: 'q7',
      type: 'multiple-choice',
      question: 'What does 蒸 mean?',
      options: ['steam', 'fry', 'cut', 'wash'],
      correctAnswer: 0,
    },
    {
      id: 'q8',
      type: 'multiple-choice',
      question: "Which word means 'fire'?",
      options: ['鍋', '火', '煮', '炒'],
      correctAnswer: 1,
    },
  ],
};

export default lesson;
