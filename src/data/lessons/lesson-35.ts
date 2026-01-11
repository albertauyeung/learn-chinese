import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-35',
  theme: 'cooking-2',
  icon: '🍳',
  title: {
    chinese: '煮飯（二）',
    english: 'Cooking (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '炒', english: 'stir-fry' },
    { id: 'vocab-02', character: '蒸', english: 'steam' },
    { id: 'vocab-03', character: '油', english: 'oil' },
    { id: 'vocab-04', character: '鹽', english: 'salt' },
    { id: 'vocab-05', character: '糖', english: 'sugar' },
    { id: 'vocab-06', character: '材料', english: 'ingredients' },
    { id: 'vocab-07', character: '準備', english: 'prepare' },
    { id: 'vocab-08', character: '完成', english: 'finish, complete' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '媽媽炒菜。',
      english: 'Mom stir-fries vegetables.',
      words: [
        { character: '媽媽', english: 'mom' },
        { character: '炒', english: 'stir-fry', isVocab: true },
        { character: '菜', english: 'vegetables' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '蒸魚好好吃。',
      english: 'Steamed fish is delicious.',
      words: [
        { character: '蒸', english: 'steam', isVocab: true },
        { character: '魚', english: 'fish' },
        { character: '好', english: 'so' },
        { character: '好吃', english: 'delicious' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '放少少油。',
      english: 'Add a little oil.',
      words: [
        { character: '放', english: 'add' },
        { character: '少少', english: 'a little' },
        { character: '油', english: 'oil', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '加鹽和糖。',
      english: 'Add salt and sugar.',
      words: [
        { character: '加', english: 'add' },
        { character: '鹽', english: 'salt', isVocab: true },
        { character: '和', english: 'and' },
        { character: '糖', english: 'sugar', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '先準備材料。',
      english: 'First prepare the ingredients.',
      words: [
        { character: '先', english: 'first' },
        { character: '準備', english: 'prepare', isVocab: true },
        { character: '材料', english: 'ingredients', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '完成了！',
      english: 'Finished!',
      words: [
        { character: '完成', english: 'finish', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '一起煮飯',
      english: 'Cooking Together',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '幫', english: 'help' },
        { character: '媽媽', english: 'mom' },
        { character: '煮飯', english: 'cook' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '先', english: 'first' },
        { character: '準備', english: 'prepare', isVocab: true },
        { character: '材料', english: 'ingredients', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '炒', english: 'stir-fry', isVocab: true },
        { character: '菜', english: 'vegetables' },
        { character: '加', english: 'add' },
        { character: '鹽', english: 'salt', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '完成', english: 'finish', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 炒 mean?',
      options: ['boil', 'steam', 'stir-fry', 'bake'],
      correctAnswer: 'stir-fry',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 鹽 mean?',
      options: ['sugar', 'salt', 'oil', 'pepper'],
      correctAnswer: 'salt',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'prepare'?",
      options: ['完成', '準備', '材料', '煮'],
      correctAnswer: '準備',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the cooking words:',
      pairs: [
        { chinese: '炒', english: 'stir-fry' },
        { chinese: '蒸', english: 'steam' },
        { chinese: '準備', english: 'prepare' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '糖 means:',
      options: ['salt', 'sugar', 'oil', 'vinegar'],
      correctAnswer: 'sugar',
    },
  ],
};

export default lesson;
