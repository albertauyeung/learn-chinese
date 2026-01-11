import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-55',
  theme: 'cooking-3',
  icon: '🍳',
  title: {
    chinese: '煮飯（三）',
    english: 'Cooking (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '食譜', english: 'recipe' },
    { id: 'vocab-02', character: '份量', english: 'portion' },
    { id: 'vocab-03', character: '步驟', english: 'steps' },
    { id: 'vocab-04', character: '調味', english: 'seasoning' },
    { id: 'vocab-05', character: '火候', english: 'heat level' },
    { id: 'vocab-06', character: '技巧', english: 'technique' },
    { id: 'vocab-07', character: '創意', english: 'creativity' },
    { id: 'vocab-08', character: '擺盤', english: 'plating' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '看食譜學煮飯。',
      english: 'Learn to cook by following recipes.',
      words: [
        { character: '看', english: 'follow' },
        { character: '食譜', english: 'recipe', isVocab: true },
        { character: '學', english: 'learn' },
        { character: '煮飯', english: 'cook' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '注意份量。',
      english: 'Pay attention to portions.',
      words: [
        { character: '注意', english: 'pay attention' },
        { character: '份量', english: 'portion', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '跟住步驟做。',
      english: 'Follow the steps.',
      words: [
        { character: '跟住', english: 'follow' },
        { character: '步驟', english: 'steps', isVocab: true },
        { character: '做', english: 'do' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '調味要適當。',
      english: 'Seasoning should be appropriate.',
      words: [
        { character: '調味', english: 'seasoning', isVocab: true },
        { character: '要', english: 'should' },
        { character: '適當', english: 'appropriate' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '火候很重要。',
      english: 'Heat level is very important.',
      words: [
        { character: '火候', english: 'heat level', isVocab: true },
        { character: '很', english: 'very' },
        { character: '重要', english: 'important' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '煮飯需要技巧和創意。',
      english: 'Cooking needs technique and creativity.',
      words: [
        { character: '煮飯', english: 'cooking' },
        { character: '需要', english: 'needs' },
        { character: '技巧', english: 'technique', isVocab: true },
        { character: '和', english: 'and' },
        { character: '創意', english: 'creativity', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '學煮飯',
      english: 'Learning to Cook',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '看', english: 'follow' },
        { character: '食譜', english: 'recipe', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '跟住', english: 'follow' },
        { character: '步驟', english: 'steps', isVocab: true },
        { character: '做', english: 'do' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '調味', english: 'seasoning', isVocab: true },
        { character: '適當', english: 'appropriate' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '成功', english: 'success' },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 食譜 mean?',
      options: ['cookbook', 'recipe', 'menu', 'ingredient'],
      correctAnswer: 'recipe',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 火候 mean?',
      options: ['fire', 'heat level', 'time', 'temperature'],
      correctAnswer: 'heat level',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'technique'?",
      options: ['步驟', '技巧', '創意', '份量'],
      correctAnswer: '技巧',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '食譜', english: 'recipe' },
        { chinese: '步驟', english: 'steps' },
        { chinese: '調味', english: 'seasoning' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '創意 means:',
      options: ['skill', 'creativity', 'practice', 'patience'],
      correctAnswer: 'creativity',
    },
  ],
};

export default lesson;
