import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-06',
  theme: 'times-1',
  icon: '⏰',
  title: {
    chinese: '一天的時間（一）',
    english: 'Times of Day (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '早上', english: 'morning' },
    { id: 'vocab-02', character: '晚上', english: 'evening, night' },
    { id: 'vocab-03', character: '今天', english: 'today' },
    { id: 'vocab-04', character: '明天', english: 'tomorrow' },
    { id: 'vocab-05', character: '睡覺', english: 'sleep' },
    { id: 'vocab-06', character: '起床', english: 'wake up, get up' },
    { id: 'vocab-07', character: '早', english: 'early' },
    { id: 'vocab-08', character: '晚', english: 'late' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '早上好！',
      english: 'Good morning!',
      words: [
        { character: '早上', english: 'morning', isVocab: true },
        { character: '好', english: 'good' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '晚上好！',
      english: 'Good evening!',
      words: [
        { character: '晚上', english: 'evening', isVocab: true },
        { character: '好', english: 'good' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我早上起床。',
      english: 'I get up in the morning.',
      words: [
        { character: '我', english: 'I' },
        { character: '早上', english: 'morning', isVocab: true },
        { character: '起床', english: 'get up', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '晚上我睡覺。',
      english: 'I sleep at night.',
      words: [
        { character: '晚上', english: 'night', isVocab: true },
        { character: '我', english: 'I' },
        { character: '睡覺', english: 'sleep', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '今天我好開心。',
      english: 'I am very happy today.',
      words: [
        { character: '今天', english: 'today', isVocab: true },
        { character: '我', english: 'I' },
        { character: '好', english: 'very' },
        { character: '開心', english: 'happy' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '明天見！',
      english: 'See you tomorrow!',
      words: [
        { character: '明天', english: 'tomorrow', isVocab: true },
        { character: '見', english: 'see' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '我的一天',
      english: 'My Day',
    },
    content: [
      [
        { character: '早上', english: 'morning', isVocab: true },
        { character: '我', english: 'I' },
        { character: '起床', english: 'get up', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '今天', english: 'today', isVocab: true },
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '學校', english: 'school' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '晚上', english: 'evening', isVocab: true },
        { character: '我', english: 'I' },
        { character: '睡覺', english: 'sleep', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '明天', english: 'tomorrow', isVocab: true },
        { character: '見', english: 'see' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 早上 mean?',
      options: ['evening', 'morning', 'afternoon', 'night'],
      correctAnswer: 'morning',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 睡覺 mean?',
      options: ['eat', 'play', 'sleep', 'run'],
      correctAnswer: 'sleep',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'today'?",
      options: ['明天', '今天', '早上', '晚上'],
      correctAnswer: '今天',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '早上', english: 'morning' },
        { chinese: '晚上', english: 'evening' },
        { chinese: '今天', english: 'today' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '明天見 means:',
      options: ['Good morning', 'Good night', 'See you tomorrow', 'Hello today'],
      correctAnswer: 'See you tomorrow',
    },
  ],
};

export default lesson;
