import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-56',
  theme: 'sports-3',
  icon: '⚽',
  title: {
    chinese: '做運動（三）',
    english: 'Sports (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '羽毛球', english: 'badminton' },
    { id: 'vocab-02', character: '網球', english: 'tennis' },
    { id: 'vocab-03', character: '教練', english: 'coach' },
    { id: 'vocab-04', character: '訓練', english: 'training' },
    { id: 'vocab-05', character: '堅持', english: 'persist' },
    { id: 'vocab-06', character: '冠軍', english: 'champion' },
    { id: 'vocab-07', character: '體育', english: 'physical education' },
    { id: 'vocab-08', character: '精神', english: 'spirit' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我學打羽毛球。',
      english: 'I learn to play badminton.',
      words: [
        { character: '我', english: 'I' },
        { character: '學', english: 'learn' },
        { character: '打', english: 'play' },
        { character: '羽毛球', english: 'badminton', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '教練教我們訓練。',
      english: 'The coach trains us.',
      words: [
        { character: '教練', english: 'coach', isVocab: true },
        { character: '教', english: 'teach' },
        { character: '我們', english: 'us' },
        { character: '訓練', english: 'train', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '做運動要堅持。',
      english: 'Must persist in exercising.',
      words: [
        { character: '做', english: 'do' },
        { character: '運動', english: 'exercise' },
        { character: '要', english: 'must' },
        { character: '堅持', english: 'persist', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '他是冠軍！',
      english: 'He is the champion!',
      words: [
        { character: '他', english: 'he' },
        { character: '是', english: 'is' },
        { character: '冠軍', english: 'champion', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '體育精神很重要。',
      english: 'Sportsmanship is very important.',
      words: [
        { character: '體育', english: 'sports', isVocab: true },
        { character: '精神', english: 'spirit', isVocab: true },
        { character: '很', english: 'very' },
        { character: '重要', english: 'important' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '網球是我最喜歡的運動。',
      english: 'Tennis is my favorite sport.',
      words: [
        { character: '網球', english: 'tennis', isVocab: true },
        { character: '是', english: 'is' },
        { character: '我', english: 'my' },
        { character: '最', english: 'most' },
        { character: '喜歡的', english: 'favorite' },
        { character: '運動', english: 'sport' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '運動精神',
      english: 'Sportsmanship',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '參加', english: 'join' },
        { character: '羽毛球', english: 'badminton', isVocab: true },
        { character: '訓練', english: 'training', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '教練', english: 'coach', isVocab: true },
        { character: '說', english: 'says' },
        { character: '要', english: 'must' },
        { character: '堅持', english: 'persist', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '體育', english: 'sports', isVocab: true },
        { character: '精神', english: 'spirit', isVocab: true },
        { character: '最', english: 'most' },
        { character: '重要', english: 'important' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '加油', english: 'go for it' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 羽毛球 mean?',
      options: ['tennis', 'badminton', 'ping pong', 'basketball'],
      correctAnswer: 'badminton',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 教練 mean?',
      options: ['player', 'coach', 'referee', 'teammate'],
      correctAnswer: 'coach',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'persist'?",
      options: ['訓練', '堅持', '冠軍', '精神'],
      correctAnswer: '堅持',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '教練', english: 'coach' },
        { chinese: '訓練', english: 'training' },
        { chinese: '冠軍', english: 'champion' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '體育精神 means:',
      options: ['exercise', 'sportsmanship', 'competition', 'victory'],
      correctAnswer: 'sportsmanship',
    },
  ],
};

export default lesson;
