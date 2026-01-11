import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-19',
  theme: 'weather-1',
  icon: '☀️',
  title: {
    chinese: '天氣（一）',
    english: 'Weather (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '天氣', english: 'weather' },
    { id: 'vocab-02', character: '太陽', english: 'sun' },
    { id: 'vocab-03', character: '雨', english: 'rain' },
    { id: 'vocab-04', character: '風', english: 'wind' },
    { id: 'vocab-05', character: '冷', english: 'cold' },
    { id: 'vocab-06', character: '熱', english: 'hot' },
    { id: 'vocab-07', character: '晴天', english: 'sunny day' },
    { id: 'vocab-08', character: '下', english: 'fall, down' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '今天天氣好好。',
      english: 'The weather is very nice today.',
      words: [
        { character: '今天', english: 'today' },
        { character: '天氣', english: 'weather', isVocab: true },
        { character: '好', english: 'very' },
        { character: '好', english: 'good' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '太陽出來了。',
      english: 'The sun came out.',
      words: [
        { character: '太陽', english: 'sun', isVocab: true },
        { character: '出來', english: 'came out' },
        { character: '了', english: '(completed)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '下雨了！',
      english: "It's raining!",
      words: [
        { character: '下', english: 'fall', isVocab: true },
        { character: '雨', english: 'rain', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '今天好熱。',
      english: 'It is very hot today.',
      words: [
        { character: '今天', english: 'today' },
        { character: '好', english: 'very' },
        { character: '熱', english: 'hot', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '冬天很冷。',
      english: 'Winter is very cold.',
      words: [
        { character: '冬天', english: 'winter' },
        { character: '很', english: 'very' },
        { character: '冷', english: 'cold', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '風好大。',
      english: 'The wind is very strong.',
      words: [
        { character: '風', english: 'wind', isVocab: true },
        { character: '好', english: 'very' },
        { character: '大', english: 'big' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '天氣',
      english: 'Weather',
    },
    content: [
      [
        { character: '今天', english: 'today' },
        { character: '是', english: 'is' },
        { character: '晴天', english: 'sunny day', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '太陽', english: 'sun', isVocab: true },
        { character: '好', english: 'very' },
        { character: '大', english: 'big' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '天氣', english: 'weather', isVocab: true },
        { character: '好', english: 'very' },
        { character: '熱', english: 'hot', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '游水', english: 'swim' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 天氣 mean?',
      options: ['sky', 'weather', 'sun', 'rain'],
      correctAnswer: 'weather',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 太陽 mean?',
      options: ['moon', 'star', 'sun', 'cloud'],
      correctAnswer: 'sun',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'cold'?",
      options: ['熱', '冷', '風', '雨'],
      correctAnswer: '冷',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '熱', english: 'hot' },
        { chinese: '冷', english: 'cold' },
        { chinese: '雨', english: 'rain' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '下雨了 means:',
      options: ['It is sunny', 'It is raining', 'It is windy', 'It is cold'],
      correctAnswer: 'It is raining',
    },
  ],
};

export default lesson;
