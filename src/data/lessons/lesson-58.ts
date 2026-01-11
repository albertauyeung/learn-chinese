import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-58',
  theme: 'transport-3',
  icon: '🚌',
  title: {
    chinese: '交通（三）',
    english: 'Transportation (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '機場', english: 'airport' },
    { id: 'vocab-02', character: '登機', english: 'boarding' },
    { id: 'vocab-03', character: '行李', english: 'luggage' },
    { id: 'vocab-04', character: '護照', english: 'passport' },
    { id: 'vocab-05', character: '安全', english: 'safety' },
    { id: 'vocab-06', character: '目的地', english: 'destination' },
    { id: 'vocab-07', character: '交通工具', english: 'transportation' },
    { id: 'vocab-08', character: '旅程', english: 'journey' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我們去機場。',
      english: 'We go to the airport.',
      words: [
        { character: '我們', english: 'we' },
        { character: '去', english: 'go' },
        { character: '機場', english: 'airport', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '準備登機了。',
      english: 'Ready to board.',
      words: [
        { character: '準備', english: 'ready' },
        { character: '登機', english: 'board', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '行李收拾好了嗎？',
      english: 'Is the luggage packed?',
      words: [
        { character: '行李', english: 'luggage', isVocab: true },
        { character: '收拾', english: 'pack' },
        { character: '好', english: 'done' },
        { character: '了', english: '(completed)' },
        { character: '嗎', english: '(question)' },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '記得帶護照。',
      english: 'Remember to bring passport.',
      words: [
        { character: '記得', english: 'remember' },
        { character: '帶', english: 'bring' },
        { character: '護照', english: 'passport', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '安全第一！',
      english: 'Safety first!',
      words: [
        { character: '安全', english: 'safety', isVocab: true },
        { character: '第一', english: 'first' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '目的地是日本。',
      english: 'The destination is Japan.',
      words: [
        { character: '目的地', english: 'destination', isVocab: true },
        { character: '是', english: 'is' },
        { character: '日本', english: 'Japan' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '去旅行',
      english: 'Going on a Trip',
    },
    content: [
      [
        { character: '我們', english: 'we' },
        { character: '去', english: 'go' },
        { character: '旅行', english: 'travel' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '機場', english: 'airport', isVocab: true },
        { character: '到', english: 'arrive' },
        { character: '了', english: '(completed)' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '行李', english: 'luggage', isVocab: true },
        { character: '和', english: 'and' },
        { character: '護照', english: 'passport', isVocab: true },
        { character: '準備', english: 'ready' },
        { character: '好', english: 'done' },
        { character: '了', english: '(completed)' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '旅程', english: 'journey', isVocab: true },
        { character: '開始', english: 'begin' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 機場 mean?',
      options: ['train station', 'airport', 'bus stop', 'harbor'],
      correctAnswer: 'airport',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 護照 mean?',
      options: ['ticket', 'passport', 'visa', 'ID card'],
      correctAnswer: 'passport',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'luggage'?",
      options: ['機場', '行李', '護照', '登機'],
      correctAnswer: '行李',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '機場', english: 'airport' },
        { chinese: '登機', english: 'boarding' },
        { chinese: '目的地', english: 'destination' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '旅程 means:',
      options: ['vacation', 'journey', 'flight', 'hotel'],
      correctAnswer: 'journey',
    },
  ],
};

export default lesson;
