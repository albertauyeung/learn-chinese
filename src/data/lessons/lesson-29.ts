import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-29',
  theme: 'body-2',
  icon: '🧍',
  title: {
    chinese: '我的身體（二）',
    english: 'My Body (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '肚子', english: 'stomach, belly' },
    { id: 'vocab-02', character: '背', english: 'back' },
    { id: 'vocab-03', character: '指', english: 'finger' },
    { id: 'vocab-04', character: '牙齒', english: 'teeth' },
    { id: 'vocab-05', character: '痛', english: 'pain, hurt' },
    { id: 'vocab-06', character: '舒服', english: 'comfortable' },
    { id: 'vocab-07', character: '生病', english: 'sick' },
    { id: 'vocab-08', character: '健康', english: 'healthy' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我肚子痛。',
      english: 'My stomach hurts.',
      words: [
        { character: '我', english: 'my' },
        { character: '肚子', english: 'stomach', isVocab: true },
        { character: '痛', english: 'hurts', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我有十隻手指。',
      english: 'I have ten fingers.',
      words: [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '十', english: 'ten' },
        { character: '隻', english: '(measure word)' },
        { character: '手', english: 'hand' },
        { character: '指', english: 'finger', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '要刷牙齒！',
      english: 'Need to brush teeth!',
      words: [
        { character: '要', english: 'need' },
        { character: '刷', english: 'brush' },
        { character: '牙齒', english: 'teeth', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我生病了。',
      english: 'I am sick.',
      words: [
        { character: '我', english: 'I' },
        { character: '生病', english: 'sick', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '現在舒服多了。',
      english: 'Much more comfortable now.',
      words: [
        { character: '現在', english: 'now' },
        { character: '舒服', english: 'comfortable', isVocab: true },
        { character: '多了', english: 'much more' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '要健康，多做運動。',
      english: 'To be healthy, exercise more.',
      words: [
        { character: '要', english: 'to' },
        { character: '健康', english: 'healthy', isVocab: true },
        { character: '，', english: '', isPunctuation: true },
        { character: '多', english: 'more' },
        { character: '做', english: 'do' },
        { character: '運動', english: 'exercise' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '生病了',
      english: 'Being Sick',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '生病', english: 'sick', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '肚子', english: 'stomach', isVocab: true },
        { character: '好', english: 'very' },
        { character: '痛', english: 'hurt', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '媽媽', english: 'mom' },
        { character: '照顧', english: 'take care' },
        { character: '我', english: 'me' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '現在', english: 'now' },
        { character: '舒服', english: 'comfortable', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 肚子 mean?',
      options: ['head', 'stomach', 'arm', 'leg'],
      correctAnswer: 'stomach',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 痛 mean?',
      options: ['itchy', 'cold', 'pain', 'hot'],
      correctAnswer: 'pain',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'healthy'?",
      options: ['生病', '舒服', '健康', '痛'],
      correctAnswer: '健康',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '生病', english: 'sick' },
        { chinese: '健康', english: 'healthy' },
        { chinese: '舒服', english: 'comfortable' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '牙齒 means:',
      options: ['tongue', 'lips', 'teeth', 'nose'],
      correctAnswer: 'teeth',
    },
  ],
};

export default lesson;
