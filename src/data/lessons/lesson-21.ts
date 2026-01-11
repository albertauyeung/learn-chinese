import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-21',
  theme: 'at-home-2',
  icon: '🏠',
  title: {
    chinese: '在家裡（二）',
    english: 'At Home (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '客廳', english: 'living room' },
    { id: 'vocab-02', character: '房間', english: 'bedroom' },
    { id: 'vocab-03', character: '廚房', english: 'kitchen' },
    { id: 'vocab-04', character: '浴室', english: 'bathroom' },
    { id: 'vocab-05', character: '門', english: 'door' },
    { id: 'vocab-06', character: '窗', english: 'window' },
    { id: 'vocab-07', character: '樓', english: 'floor, building' },
    { id: 'vocab-08', character: '住', english: 'live' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '爸爸在客廳看電視。',
      english: 'Dad watches TV in the living room.',
      words: [
        { character: '爸爸', english: 'dad' },
        { character: '在', english: 'at' },
        { character: '客廳', english: 'living room', isVocab: true },
        { character: '看', english: 'watch' },
        { character: '電視', english: 'TV' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我的房間很大。',
      english: 'My bedroom is very big.',
      words: [
        { character: '我的', english: 'my' },
        { character: '房間', english: 'bedroom', isVocab: true },
        { character: '很', english: 'very' },
        { character: '大', english: 'big' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '媽媽在廚房煮飯。',
      english: 'Mom cooks in the kitchen.',
      words: [
        { character: '媽媽', english: 'mom' },
        { character: '在', english: 'at' },
        { character: '廚房', english: 'kitchen', isVocab: true },
        { character: '煮飯', english: 'cook' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '請關門。',
      english: 'Please close the door.',
      words: [
        { character: '請', english: 'please' },
        { character: '關', english: 'close' },
        { character: '門', english: 'door', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '打開窗，好涼快。',
      english: 'Open the window, so cool.',
      words: [
        { character: '打開', english: 'open' },
        { character: '窗', english: 'window', isVocab: true },
        { character: '，', english: '', isPunctuation: true },
        { character: '好', english: 'so' },
        { character: '涼快', english: 'cool' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '我們住在三樓。',
      english: 'We live on the third floor.',
      words: [
        { character: '我們', english: 'we' },
        { character: '住', english: 'live', isVocab: true },
        { character: '在', english: 'on' },
        { character: '三', english: 'three' },
        { character: '樓', english: 'floor', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '我們的家',
      english: 'Our Home',
    },
    content: [
      [
        { character: '我們', english: 'we' },
        { character: '住', english: 'live', isVocab: true },
        { character: '在', english: 'on' },
        { character: '三', english: 'three' },
        { character: '樓', english: 'floor', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '客廳', english: 'living room', isVocab: true },
        { character: '很', english: 'very' },
        { character: '大', english: 'big' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我的', english: 'my' },
        { character: '房間', english: 'bedroom', isVocab: true },
        { character: '有', english: 'has' },
        { character: '窗', english: 'window', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '好', english: 'very' },
        { character: '喜歡', english: 'like' },
        { character: '我們', english: 'our' },
        { character: '的', english: "'s" },
        { character: '家', english: 'home' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 客廳 mean?',
      options: ['bedroom', 'living room', 'kitchen', 'bathroom'],
      correctAnswer: 'living room',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 廚房 mean?',
      options: ['living room', 'bedroom', 'kitchen', 'bathroom'],
      correctAnswer: 'kitchen',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'door'?",
      options: ['窗', '門', '樓', '房間'],
      correctAnswer: '門',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the rooms:',
      pairs: [
        { chinese: '客廳', english: 'living room' },
        { chinese: '廚房', english: 'kitchen' },
        { chinese: '浴室', english: 'bathroom' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '我們住在三樓 means:',
      options: ['We have three floors', 'We live on the third floor', 'We see three buildings', 'Three people live here'],
      correctAnswer: 'We live on the third floor',
    },
  ],
};

export default lesson;
