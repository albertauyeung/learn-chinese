import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-51',
  theme: 'restaurant-3',
  icon: '🍜',
  title: {
    chinese: '在餐廳（三）',
    english: 'At the Restaurant (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '預訂', english: 'reservation' },
    { id: 'vocab-02', character: '推介', english: 'recommend' },
    { id: 'vocab-03', character: '招牌', english: 'signature (dish)' },
    { id: 'vocab-04', character: '服務', english: 'service' },
    { id: 'vocab-05', character: '評價', english: 'review' },
    { id: 'vocab-06', character: '外賣', english: 'takeaway' },
    { id: 'vocab-07', character: '堂食', english: 'dine-in' },
    { id: 'vocab-08', character: '小費', english: 'tip' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我想預訂位子。',
      english: 'I want to make a reservation.',
      words: [
        { character: '我', english: 'I' },
        { character: '想', english: 'want' },
        { character: '預訂', english: 'reservation', isVocab: true },
        { character: '位子', english: 'seat' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '有什麼推介？',
      english: 'Any recommendations?',
      words: [
        { character: '有', english: 'have' },
        { character: '什麼', english: 'what' },
        { character: '推介', english: 'recommendation', isVocab: true },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '這是招牌菜。',
      english: 'This is the signature dish.',
      words: [
        { character: '這', english: 'this' },
        { character: '是', english: 'is' },
        { character: '招牌', english: 'signature', isVocab: true },
        { character: '菜', english: 'dish' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '服務很好。',
      english: 'The service is very good.',
      words: [
        { character: '服務', english: 'service', isVocab: true },
        { character: '很', english: 'very' },
        { character: '好', english: 'good' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '堂食還是外賣？',
      english: 'Dine-in or takeaway?',
      words: [
        { character: '堂食', english: 'dine-in', isVocab: true },
        { character: '還是', english: 'or' },
        { character: '外賣', english: 'takeaway', isVocab: true },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '這間餐廳評價很高。',
      english: 'This restaurant has high reviews.',
      words: [
        { character: '這', english: 'this' },
        { character: '間', english: '(measure word)' },
        { character: '餐廳', english: 'restaurant' },
        { character: '評價', english: 'review', isVocab: true },
        { character: '很', english: 'very' },
        { character: '高', english: 'high' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '餐廳體驗',
      english: 'Restaurant Experience',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '預訂', english: 'reservation', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '位子', english: 'seat' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '招牌', english: 'signature', isVocab: true },
        { character: '菜', english: 'dish' },
        { character: '好', english: 'so' },
        { character: '好吃', english: 'delicious' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '服務', english: 'service', isVocab: true },
        { character: '很', english: 'very' },
        { character: '好', english: 'good' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '評價', english: 'review', isVocab: true },
        { character: '五', english: 'five' },
        { character: '星', english: 'star' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 預訂 mean?',
      options: ['order', 'reservation', 'cancel', 'confirm'],
      correctAnswer: 'reservation',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 外賣 mean?',
      options: ['dine-in', 'takeaway', 'delivery', 'buffet'],
      correctAnswer: 'takeaway',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'recommend'?",
      options: ['招牌', '推介', '服務', '評價'],
      correctAnswer: '推介',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '堂食', english: 'dine-in' },
        { chinese: '外賣', english: 'takeaway' },
        { chinese: '服務', english: 'service' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '招牌菜 means:',
      options: ['menu', 'signature dish', 'appetizer', 'dessert'],
      correctAnswer: 'signature dish',
    },
  ],
};

export default lesson;
