import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-54',
  theme: 'festivals-3',
  icon: '🎊',
  title: {
    chinese: '節日（三）',
    english: 'Festivals (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '端午節', english: 'Dragon Boat Festival' },
    { id: 'vocab-02', character: '粽', english: 'rice dumpling (zongzi)' },
    { id: 'vocab-03', character: '龍舟', english: 'dragon boat' },
    { id: 'vocab-04', character: '比賽', english: 'competition' },
    { id: 'vocab-05', character: '傳說', english: 'legend' },
    { id: 'vocab-06', character: '習俗', english: 'custom' },
    { id: 'vocab-07', character: '紀念', english: 'commemorate' },
    { id: 'vocab-08', character: '氣氛', english: 'atmosphere' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '端午節吃粽。',
      english: 'Eat rice dumplings on Dragon Boat Festival.',
      words: [
        { character: '端午節', english: 'Dragon Boat Festival', isVocab: true },
        { character: '吃', english: 'eat' },
        { character: '粽', english: 'rice dumpling', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '龍舟比賽好刺激！',
      english: 'Dragon boat race is so exciting!',
      words: [
        { character: '龍舟', english: 'dragon boat', isVocab: true },
        { character: '比賽', english: 'race', isVocab: true },
        { character: '好', english: 'so' },
        { character: '刺激', english: 'exciting' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '這是一個傳說。',
      english: 'This is a legend.',
      words: [
        { character: '這', english: 'this' },
        { character: '是', english: 'is' },
        { character: '一個', english: 'a' },
        { character: '傳說', english: 'legend', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '這是我們的習俗。',
      english: 'This is our custom.',
      words: [
        { character: '這', english: 'this' },
        { character: '是', english: 'is' },
        { character: '我們的', english: 'our' },
        { character: '習俗', english: 'custom', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '紀念屈原。',
      english: 'Commemorate Qu Yuan.',
      words: [
        { character: '紀念', english: 'commemorate', isVocab: true },
        { character: '屈原', english: 'Qu Yuan' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '節日氣氛好濃。',
      english: 'The festive atmosphere is strong.',
      words: [
        { character: '節日', english: 'festival' },
        { character: '氣氛', english: 'atmosphere', isVocab: true },
        { character: '好', english: 'very' },
        { character: '濃', english: 'strong' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '端午節',
      english: 'Dragon Boat Festival',
    },
    content: [
      [
        { character: '端午節', english: 'Dragon Boat Festival', isVocab: true },
        { character: '到', english: 'arrived' },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'we' },
        { character: '吃', english: 'eat' },
        { character: '粽', english: 'rice dumpling', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '看', english: 'watch' },
        { character: '龍舟', english: 'dragon boat', isVocab: true },
        { character: '比賽', english: 'race', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '氣氛', english: 'atmosphere', isVocab: true },
        { character: '好', english: 'so' },
        { character: '好', english: 'good' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What is 端午節?',
      options: ['New Year', 'Dragon Boat Festival', 'Mid-Autumn', 'Christmas'],
      correctAnswer: 'Dragon Boat Festival',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What is 粽?',
      options: ['mooncake', 'rice dumpling', 'egg tart', 'bun'],
      correctAnswer: 'rice dumpling',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'custom'?",
      options: ['傳說', '習俗', '紀念', '比賽'],
      correctAnswer: '習俗',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '龍舟', english: 'dragon boat' },
        { chinese: '比賽', english: 'competition' },
        { chinese: '傳說', english: 'legend' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '氣氛 means:',
      options: ['weather', 'atmosphere', 'season', 'holiday'],
      correctAnswer: 'atmosphere',
    },
  ],
};

export default lesson;
