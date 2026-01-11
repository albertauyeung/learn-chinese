import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-34',
  theme: 'festivals-2',
  icon: '🎊',
  title: {
    chinese: '節日（二）',
    english: 'Festivals (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '中秋節', english: 'Mid-Autumn Festival' },
    { id: 'vocab-02', character: '月餅', english: 'mooncake' },
    { id: 'vocab-03', character: '燈籠', english: 'lantern' },
    { id: 'vocab-04', character: '月亮', english: 'moon' },
    { id: 'vocab-05', character: '圓', english: 'round' },
    { id: 'vocab-06', character: '團圓', english: 'reunion' },
    { id: 'vocab-07', character: '舞', english: 'dance' },
    { id: 'vocab-08', character: '龍', english: 'dragon' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '中秋節快樂！',
      english: 'Happy Mid-Autumn Festival!',
      words: [
        { character: '中秋節', english: 'Mid-Autumn Festival', isVocab: true },
        { character: '快樂', english: 'happy' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我吃月餅。',
      english: 'I eat mooncakes.',
      words: [
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat' },
        { character: '月餅', english: 'mooncake', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我有一個燈籠。',
      english: 'I have a lantern.',
      words: [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '一個', english: 'one' },
        { character: '燈籠', english: 'lantern', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '月亮好圓！',
      english: 'The moon is so round!',
      words: [
        { character: '月亮', english: 'moon', isVocab: true },
        { character: '好', english: 'so' },
        { character: '圓', english: 'round', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '中秋節是團圓的日子。',
      english: 'Mid-Autumn Festival is a day for reunion.',
      words: [
        { character: '中秋節', english: 'Mid-Autumn Festival', isVocab: true },
        { character: '是', english: 'is' },
        { character: '團圓', english: 'reunion', isVocab: true },
        { character: '的', english: "'s" },
        { character: '日子', english: 'day' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '舞龍舞獅好熱鬧。',
      english: 'Dragon and lion dances are so festive.',
      words: [
        { character: '舞', english: 'dance', isVocab: true },
        { character: '龍', english: 'dragon', isVocab: true },
        { character: '舞', english: 'dance', isVocab: true },
        { character: '獅', english: 'lion' },
        { character: '好', english: 'so' },
        { character: '熱鬧', english: 'festive' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '過中秋',
      english: 'Celebrating Mid-Autumn',
    },
    content: [
      [
        { character: '今天', english: 'today' },
        { character: '是', english: 'is' },
        { character: '中秋節', english: 'Mid-Autumn Festival', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '吃', english: 'eat' },
        { character: '月餅', english: 'mooncake', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '看', english: 'look at' },
        { character: '月亮', english: 'moon', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '月亮', english: 'moon', isVocab: true },
        { character: '好', english: 'so' },
        { character: '圓', english: 'round', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What is 中秋節?',
      options: ['New Year', 'Mid-Autumn Festival', 'Christmas', 'Birthday'],
      correctAnswer: 'Mid-Autumn Festival',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What is 月餅?',
      options: ['moon', 'mooncake', 'lantern', 'dragon'],
      correctAnswer: 'mooncake',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'round'?",
      options: ['圓', '月', '燈', '龍'],
      correctAnswer: '圓',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '月餅', english: 'mooncake' },
        { chinese: '燈籠', english: 'lantern' },
        { chinese: '月亮', english: 'moon' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '龍 means:',
      options: ['lion', 'tiger', 'dragon', 'phoenix'],
      correctAnswer: 'dragon',
    },
  ],
};

export default lesson;
