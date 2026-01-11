import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-09',
  theme: 'body-1',
  icon: '🧍',
  title: {
    chinese: '我的身體（一）',
    english: 'My Body (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '頭', english: 'head' },
    { id: 'vocab-02', character: '手', english: 'hand' },
    { id: 'vocab-03', character: '腳', english: 'foot, leg' },
    { id: 'vocab-04', character: '眼睛', english: 'eyes' },
    { id: 'vocab-05', character: '耳朵', english: 'ears' },
    { id: 'vocab-06', character: '嘴', english: 'mouth' },
    { id: 'vocab-07', character: '鼻', english: 'nose' },
    { id: 'vocab-08', character: '大', english: 'big' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '這是我的頭。',
      english: 'This is my head.',
      words: [
        { character: '這', english: 'this' },
        { character: '是', english: 'is' },
        { character: '我的', english: 'my' },
        { character: '頭', english: 'head', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我有兩隻手。',
      english: 'I have two hands.',
      words: [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '兩', english: 'two' },
        { character: '隻', english: '(measure word)' },
        { character: '手', english: 'hand', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我的眼睛大大。',
      english: 'My eyes are big.',
      words: [
        { character: '我的', english: 'my' },
        { character: '眼睛', english: 'eyes', isVocab: true },
        { character: '大', english: 'big', isVocab: true },
        { character: '大', english: 'big', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '用耳朵聽。',
      english: 'Listen with ears.',
      words: [
        { character: '用', english: 'use' },
        { character: '耳朵', english: 'ears', isVocab: true },
        { character: '聽', english: 'listen' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '用嘴吃飯。',
      english: 'Eat with the mouth.',
      words: [
        { character: '用', english: 'use' },
        { character: '嘴', english: 'mouth', isVocab: true },
        { character: '吃', english: 'eat' },
        { character: '飯', english: 'food' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '我的腳好快。',
      english: 'My feet are very fast.',
      words: [
        { character: '我的', english: 'my' },
        { character: '腳', english: 'feet', isVocab: true },
        { character: '好', english: 'very' },
        { character: '快', english: 'fast' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '我的身體',
      english: 'My Body',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '頭', english: 'head', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '手', english: 'hands', isVocab: true },
        { character: '和', english: 'and' },
        { character: '腳', english: 'feet', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我的', english: 'my' },
        { character: '眼睛', english: 'eyes', isVocab: true },
        { character: '大', english: 'big', isVocab: true },
        { character: '大', english: 'big', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
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
      question: 'What does 頭 mean?',
      options: ['hand', 'foot', 'head', 'eye'],
      correctAnswer: 'head',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 眼睛 mean?',
      options: ['ears', 'eyes', 'nose', 'mouth'],
      correctAnswer: 'eyes',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'hand'?",
      options: ['頭', '腳', '手', '嘴'],
      correctAnswer: '手',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the body parts:',
      pairs: [
        { chinese: '眼睛', english: 'eyes' },
        { chinese: '耳朵', english: 'ears' },
        { chinese: '嘴', english: 'mouth' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '我的眼睛大大 means:',
      options: ['My eyes are small', 'My eyes are big', 'I have eyes', 'Eyes are good'],
      correctAnswer: 'My eyes are big',
    },
  ],
};

export default lesson;
