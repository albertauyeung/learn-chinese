import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-39',
  theme: 'weather-2',
  icon: '☀️',
  title: {
    chinese: '天氣（二）',
    english: 'Weather (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '雲', english: 'cloud' },
    { id: 'vocab-02', character: '雪', english: 'snow' },
    { id: 'vocab-03', character: '打雷', english: 'thunder' },
    { id: 'vocab-04', character: '颱風', english: 'typhoon' },
    { id: 'vocab-05', character: '涼', english: 'cool' },
    { id: 'vocab-06', character: '暖', english: 'warm' },
    { id: 'vocab-07', character: '傘', english: 'umbrella' },
    { id: 'vocab-08', character: '出', english: 'come out, go out' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '天上有很多雲。',
      english: 'There are many clouds in the sky.',
      words: [
        { character: '天上', english: 'in the sky' },
        { character: '有', english: 'have' },
        { character: '很多', english: 'many' },
        { character: '雲', english: 'cloud', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '下雪了！好冷！',
      english: "It's snowing! So cold!",
      words: [
        { character: '下', english: 'fall' },
        { character: '雪', english: 'snow', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '！', english: '', isPunctuation: true },
        { character: '好', english: 'so' },
        { character: '冷', english: 'cold' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '打雷了，好驚！',
      english: "It's thundering, scary!",
      words: [
        { character: '打雷', english: 'thunder', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '，', english: '', isPunctuation: true },
        { character: '好', english: 'so' },
        { character: '驚', english: 'scary' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '颱風來了，不要出去。',
      english: 'Typhoon is coming, do not go out.',
      words: [
        { character: '颱風', english: 'typhoon', isVocab: true },
        { character: '來', english: 'coming' },
        { character: '了', english: '(change of state)' },
        { character: '，', english: '', isPunctuation: true },
        { character: '不要', english: 'do not' },
        { character: '出', english: 'go out', isVocab: true },
        { character: '去', english: 'go' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '秋天很涼。',
      english: 'Autumn is cool.',
      words: [
        { character: '秋天', english: 'autumn' },
        { character: '很', english: 'very' },
        { character: '涼', english: 'cool', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '帶傘出去。',
      english: 'Bring an umbrella when going out.',
      words: [
        { character: '帶', english: 'bring' },
        { character: '傘', english: 'umbrella', isVocab: true },
        { character: '出', english: 'go', isVocab: true },
        { character: '去', english: 'out' },
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
        { character: '早上', english: 'morning' },
        { character: '有', english: 'have' },
        { character: '太陽', english: 'sun' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '中午', english: 'noon' },
        { character: '有', english: 'have' },
        { character: '雲', english: 'clouds', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '下午', english: 'afternoon' },
        { character: '下雨', english: 'rain' },
        { character: '了', english: '(change of state)' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '好在', english: 'luckily' },
        { character: '有', english: 'have' },
        { character: '帶', english: 'bring' },
        { character: '傘', english: 'umbrella', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 雲 mean?',
      options: ['rain', 'cloud', 'wind', 'sun'],
      correctAnswer: 'cloud',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 颱風 mean?',
      options: ['tornado', 'typhoon', 'earthquake', 'flood'],
      correctAnswer: 'typhoon',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'umbrella'?",
      options: ['雲', '雪', '傘', '風'],
      correctAnswer: '傘',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the weather:',
      pairs: [
        { chinese: '雪', english: 'snow' },
        { chinese: '雲', english: 'cloud' },
        { chinese: '打雷', english: 'thunder' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '暖 means:',
      options: ['cold', 'warm', 'hot', 'cool'],
      correctAnswer: 'warm',
    },
  ],
};

export default lesson;
