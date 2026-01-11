import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-16',
  theme: 'sports-1',
  icon: '⚽',
  title: {
    chinese: '做運動（一）',
    english: 'Sports (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '運動', english: 'sports, exercise' },
    { id: 'vocab-02', character: '游水', english: 'swim' },
    { id: 'vocab-03', character: '踢', english: 'kick' },
    { id: 'vocab-04', character: '打', english: 'hit, play' },
    { id: 'vocab-05', character: '贏', english: 'win' },
    { id: 'vocab-06', character: '輸', english: 'lose' },
    { id: 'vocab-07', character: '比賽', english: 'competition' },
    { id: 'vocab-08', character: '加油', english: 'go for it' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我喜歡做運動。',
      english: 'I like exercising.',
      words: [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '做', english: 'do' },
        { character: '運動', english: 'exercise', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我踢球。',
      english: 'I kick the ball.',
      words: [
        { character: '我', english: 'I' },
        { character: '踢', english: 'kick', isVocab: true },
        { character: '球', english: 'ball' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我去游水。',
      english: 'I go swimming.',
      words: [
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '游水', english: 'swim', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '加油！加油！',
      english: 'Go for it! Go for it!',
      words: [
        { character: '加油', english: 'go for it', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
        { character: '加油', english: 'go for it', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我們贏了比賽！',
      english: 'We won the competition!',
      words: [
        { character: '我們', english: 'we' },
        { character: '贏', english: 'won', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '比賽', english: 'competition', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '輸了沒關係。',
      english: "It's okay to lose.",
      words: [
        { character: '輸', english: 'lose', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '沒關係', english: "it's okay" },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '做運動',
      english: 'Doing Sports',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '做', english: 'do' },
        { character: '運動', english: 'sports', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '踢', english: 'kick', isVocab: true },
        { character: '球', english: 'ball' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '加油', english: 'go for it', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '贏', english: 'won', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 運動 mean?',
      options: ['rest', 'sports', 'food', 'game'],
      correctAnswer: 'sports',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 游水 mean?',
      options: ['run', 'jump', 'swim', 'kick'],
      correctAnswer: 'swim',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'win'?",
      options: ['輸', '贏', '踢', '打'],
      correctAnswer: '贏',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '贏', english: 'win' },
        { chinese: '輸', english: 'lose' },
        { chinese: '加油', english: 'go for it' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '加油 means:',
      options: ['goodbye', 'thank you', 'go for it', 'sorry'],
      correctAnswer: 'go for it',
    },
  ],
};

export default lesson;
