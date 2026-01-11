import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-47',
  theme: 'mealtime-3',
  icon: '🍽️',
  title: {
    chinese: '吃飯時間（三）',
    english: 'Mealtime (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '營養', english: 'nutrition' },
    { id: 'vocab-02', character: '均衡', english: 'balanced' },
    { id: 'vocab-03', character: '零食', english: 'snacks' },
    { id: 'vocab-04', character: '適量', english: 'moderate amount' },
    { id: 'vocab-05', character: '消化', english: 'digest' },
    { id: 'vocab-06', character: '習慣', english: 'habit' },
    { id: 'vocab-07', character: '健康', english: 'healthy' },
    { id: 'vocab-08', character: '定時', english: 'regular time' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '要吃有營養的食物。',
      english: 'Should eat nutritious food.',
      words: [
        { character: '要', english: 'should' },
        { character: '吃', english: 'eat' },
        { character: '有', english: 'have' },
        { character: '營養', english: 'nutrition', isVocab: true },
        { character: '的', english: "'s" },
        { character: '食物', english: 'food' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '飲食要均衡。',
      english: 'Diet should be balanced.',
      words: [
        { character: '飲食', english: 'diet' },
        { character: '要', english: 'should' },
        { character: '均衡', english: 'balanced', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '零食要適量吃。',
      english: 'Eat snacks in moderation.',
      words: [
        { character: '零食', english: 'snacks', isVocab: true },
        { character: '要', english: 'should' },
        { character: '適量', english: 'moderate amount', isVocab: true },
        { character: '吃', english: 'eat' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '定時吃飯是好習慣。',
      english: 'Eating at regular times is a good habit.',
      words: [
        { character: '定時', english: 'regular time', isVocab: true },
        { character: '吃飯', english: 'eat' },
        { character: '是', english: 'is' },
        { character: '好', english: 'good' },
        { character: '習慣', english: 'habit', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '慢慢吃，幫助消化。',
      english: 'Eat slowly, helps digestion.',
      words: [
        { character: '慢慢', english: 'slowly' },
        { character: '吃', english: 'eat' },
        { character: '，', english: '', isPunctuation: true },
        { character: '幫助', english: 'help' },
        { character: '消化', english: 'digestion', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '健康飲食很重要。',
      english: 'Healthy eating is very important.',
      words: [
        { character: '健康', english: 'healthy', isVocab: true },
        { character: '飲食', english: 'eating' },
        { character: '很', english: 'very' },
        { character: '重要', english: 'important' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '健康飲食',
      english: 'Healthy Eating',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '要', english: 'want' },
        { character: '健康', english: 'healthy', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '吃', english: 'eat' },
        { character: '營養', english: 'nutritious', isVocab: true },
        { character: '食物', english: 'food' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '零食', english: 'snacks', isVocab: true },
        { character: '適量', english: 'moderate', isVocab: true },
        { character: '吃', english: 'eat' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '定時', english: 'regular', isVocab: true },
        { character: '吃飯', english: 'eat' },
        { character: '是', english: 'is' },
        { character: '好', english: 'good' },
        { character: '習慣', english: 'habit', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 營養 mean?',
      options: ['taste', 'nutrition', 'color', 'smell'],
      correctAnswer: 'nutrition',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 零食 mean?',
      options: ['main dish', 'snacks', 'drink', 'dessert'],
      correctAnswer: 'snacks',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'balanced'?",
      options: ['營養', '均衡', '零食', '健康'],
      correctAnswer: '均衡',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '營養', english: 'nutrition' },
        { chinese: '習慣', english: 'habit' },
        { chinese: '健康', english: 'healthy' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '消化 means:',
      options: ['cook', 'eat', 'digest', 'taste'],
      correctAnswer: 'digest',
    },
  ],
};

export default lesson;
