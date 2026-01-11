import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-18',
  theme: 'transport-1',
  icon: '🚌',
  title: {
    chinese: '交通（一）',
    english: 'Transportation (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '車', english: 'car, vehicle' },
    { id: 'vocab-02', character: '巴士', english: 'bus' },
    { id: 'vocab-03', character: '地鐵', english: 'MTR, subway' },
    { id: 'vocab-04', character: '船', english: 'boat, ferry' },
    { id: 'vocab-05', character: '坐', english: 'sit, take' },
    { id: 'vocab-06', character: '開', english: 'drive' },
    { id: 'vocab-07', character: '到', english: 'arrive' },
    { id: 'vocab-08', character: '等', english: 'wait' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我坐巴士。',
      english: 'I take the bus.',
      words: [
        { character: '我', english: 'I' },
        { character: '坐', english: 'take', isVocab: true },
        { character: '巴士', english: 'bus', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '爸爸開車。',
      english: 'Dad drives a car.',
      words: [
        { character: '爸爸', english: 'dad' },
        { character: '開', english: 'drive', isVocab: true },
        { character: '車', english: 'car', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我們坐地鐵。',
      english: 'We take the MTR.',
      words: [
        { character: '我們', english: 'we' },
        { character: '坐', english: 'take', isVocab: true },
        { character: '地鐵', english: 'MTR', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '船到了！',
      english: 'The ferry has arrived!',
      words: [
        { character: '船', english: 'ferry', isVocab: true },
        { character: '到', english: 'arrived', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我等巴士。',
      english: 'I wait for the bus.',
      words: [
        { character: '我', english: 'I' },
        { character: '等', english: 'wait', isVocab: true },
        { character: '巴士', english: 'bus', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '車好快。',
      english: 'The car is very fast.',
      words: [
        { character: '車', english: 'car', isVocab: true },
        { character: '好', english: 'very' },
        { character: '快', english: 'fast' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '坐車去',
      english: 'Going by Vehicle',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '和', english: 'and' },
        { character: '媽媽', english: 'mom' },
        { character: '出去', english: 'go out' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'we' },
        { character: '坐', english: 'take', isVocab: true },
        { character: '巴士', english: 'bus', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '巴士', english: 'bus', isVocab: true },
        { character: '到', english: 'arrived', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
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
      question: 'What does 巴士 mean?',
      options: ['car', 'bus', 'train', 'plane'],
      correctAnswer: 'bus',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 地鐵 mean?',
      options: ['bus', 'car', 'MTR/subway', 'boat'],
      correctAnswer: 'MTR/subway',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'wait'?",
      options: ['坐', '開', '到', '等'],
      correctAnswer: '等',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the transport:',
      pairs: [
        { chinese: '巴士', english: 'bus' },
        { chinese: '地鐵', english: 'MTR' },
        { chinese: '船', english: 'boat' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '我坐巴士 means:',
      options: ['I drive a bus', 'I take the bus', 'I wait for the bus', 'I see a bus'],
      correctAnswer: 'I take the bus',
    },
  ],
};

export default lesson;
