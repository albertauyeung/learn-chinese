import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-59',
  theme: 'weather-3',
  icon: '☀️',
  title: {
    chinese: '天氣（三）',
    english: 'Weather (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '氣候', english: 'climate' },
    { id: 'vocab-02', character: '溫度', english: 'temperature' },
    { id: 'vocab-03', character: '濕度', english: 'humidity' },
    { id: 'vocab-04', character: '預報', english: 'forecast' },
    { id: 'vocab-05', character: '變化', english: 'change' },
    { id: 'vocab-06', character: '適應', english: 'adapt' },
    { id: 'vocab-07', character: '極端', english: 'extreme' },
    { id: 'vocab-08', character: '保暖', english: 'keep warm' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '香港氣候溫暖。',
      english: 'Hong Kong has a warm climate.',
      words: [
        { character: '香港', english: 'Hong Kong' },
        { character: '氣候', english: 'climate', isVocab: true },
        { character: '溫暖', english: 'warm' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '今天溫度是二十五度。',
      english: 'Today the temperature is 25 degrees.',
      words: [
        { character: '今天', english: 'today' },
        { character: '溫度', english: 'temperature', isVocab: true },
        { character: '是', english: 'is' },
        { character: '二十五', english: 'twenty-five' },
        { character: '度', english: 'degrees' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '濕度很高。',
      english: 'The humidity is very high.',
      words: [
        { character: '濕度', english: 'humidity', isVocab: true },
        { character: '很', english: 'very' },
        { character: '高', english: 'high' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '看天氣預報。',
      english: 'Check the weather forecast.',
      words: [
        { character: '看', english: 'check' },
        { character: '天氣', english: 'weather' },
        { character: '預報', english: 'forecast', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '天氣變化很大。',
      english: 'The weather changes a lot.',
      words: [
        { character: '天氣', english: 'weather' },
        { character: '變化', english: 'change', isVocab: true },
        { character: '很', english: 'very' },
        { character: '大', english: 'big' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '冬天要保暖。',
      english: 'Keep warm in winter.',
      words: [
        { character: '冬天', english: 'winter' },
        { character: '要', english: 'should' },
        { character: '保暖', english: 'keep warm', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '天氣變化',
      english: 'Weather Changes',
    },
    content: [
      [
        { character: '看', english: 'check' },
        { character: '天氣', english: 'weather' },
        { character: '預報', english: 'forecast', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '溫度', english: 'temperature', isVocab: true },
        { character: '會', english: 'will' },
        { character: '變化', english: 'change', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '濕度', english: 'humidity', isVocab: true },
        { character: '也', english: 'also' },
        { character: '高', english: 'high' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '要', english: 'need to' },
        { character: '適應', english: 'adapt', isVocab: true },
        { character: '氣候', english: 'climate', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 氣候 mean?',
      options: ['weather', 'climate', 'season', 'temperature'],
      correctAnswer: 'climate',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 溫度 mean?',
      options: ['humidity', 'temperature', 'pressure', 'wind'],
      correctAnswer: 'temperature',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'forecast'?",
      options: ['變化', '預報', '適應', '極端'],
      correctAnswer: '預報',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '溫度', english: 'temperature' },
        { chinese: '濕度', english: 'humidity' },
        { chinese: '預報', english: 'forecast' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '保暖 means:',
      options: ['cool down', 'keep warm', 'dry out', 'get wet'],
      correctAnswer: 'keep warm',
    },
  ],
};

export default lesson;
