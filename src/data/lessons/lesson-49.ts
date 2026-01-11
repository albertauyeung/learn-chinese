import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-49',
  theme: 'body-3',
  icon: '🧍',
  title: {
    chinese: '我的身體（三）',
    english: 'My Body (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '免疫', english: 'immune' },
    { id: 'vocab-02', character: '保護', english: 'protect' },
    { id: 'vocab-03', character: '注意', english: 'pay attention' },
    { id: 'vocab-04', character: '衛生', english: 'hygiene' },
    { id: 'vocab-05', character: '休息', english: 'rest' },
    { id: 'vocab-06', character: '運動', english: 'exercise' },
    { id: 'vocab-07', character: '強壯', english: 'strong' },
    { id: 'vocab-08', character: '感冒', english: 'cold (illness)' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '多運動可以強壯身體。',
      english: 'More exercise can make the body strong.',
      words: [
        { character: '多', english: 'more' },
        { character: '運動', english: 'exercise', isVocab: true },
        { character: '可以', english: 'can' },
        { character: '強壯', english: 'strong', isVocab: true },
        { character: '身體', english: 'body' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '注意個人衛生。',
      english: 'Pay attention to personal hygiene.',
      words: [
        { character: '注意', english: 'pay attention', isVocab: true },
        { character: '個人', english: 'personal' },
        { character: '衛生', english: 'hygiene', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我感冒了。',
      english: 'I caught a cold.',
      words: [
        { character: '我', english: 'I' },
        { character: '感冒', english: 'cold', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '生病要多休息。',
      english: 'Rest more when sick.',
      words: [
        { character: '生病', english: 'sick' },
        { character: '要', english: 'should' },
        { character: '多', english: 'more' },
        { character: '休息', english: 'rest', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '要保護眼睛。',
      english: 'Should protect the eyes.',
      words: [
        { character: '要', english: 'should' },
        { character: '保護', english: 'protect', isVocab: true },
        { character: '眼睛', english: 'eyes' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '免疫力好重要。',
      english: 'Immunity is very important.',
      words: [
        { character: '免疫', english: 'immune', isVocab: true },
        { character: '力', english: 'strength' },
        { character: '好', english: 'very' },
        { character: '重要', english: 'important' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '保持健康',
      english: 'Stay Healthy',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '要', english: 'want' },
        { character: '身體', english: 'body' },
        { character: '強壯', english: 'strong', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '每天', english: 'every day' },
        { character: '運動', english: 'exercise', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '注意', english: 'pay attention', isVocab: true },
        { character: '衛生', english: 'hygiene', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '不', english: 'not' },
        { character: '會', english: 'will' },
        { character: '感冒', english: 'catch cold', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 強壯 mean?',
      options: ['weak', 'strong', 'sick', 'tired'],
      correctAnswer: 'strong',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 衛生 mean?',
      options: ['exercise', 'diet', 'hygiene', 'sleep'],
      correctAnswer: 'hygiene',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'rest'?",
      options: ['運動', '休息', '感冒', '保護'],
      correctAnswer: '休息',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '保護', english: 'protect' },
        { chinese: '休息', english: 'rest' },
        { chinese: '運動', english: 'exercise' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '感冒 means:',
      options: ['fever', 'cold (illness)', 'headache', 'injury'],
      correctAnswer: 'cold (illness)',
    },
  ],
};

export default lesson;
