import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-03',
  theme: 'school-1',
  icon: '🏫',
  title: {
    chinese: '在學校（一）',
    english: 'At School (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '學校', english: 'school' },
    { id: 'vocab-02', character: '老師', english: 'teacher' },
    { id: 'vocab-03', character: '同學', english: 'classmate' },
    { id: 'vocab-04', character: '書', english: 'book' },
    { id: 'vocab-05', character: '筆', english: 'pen' },
    { id: 'vocab-06', character: '讀', english: 'read' },
    { id: 'vocab-07', character: '寫', english: 'write' },
    { id: 'vocab-08', character: '學', english: 'learn' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我去學校。',
      english: 'I go to school.',
      words: [
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '學校', english: 'school', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '老師好。',
      english: 'Hello teacher.',
      words: [
        { character: '老師', english: 'teacher', isVocab: true },
        { character: '好', english: 'good' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我讀書。',
      english: 'I read a book.',
      words: [
        { character: '我', english: 'I' },
        { character: '讀', english: 'read', isVocab: true },
        { character: '書', english: 'book', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我用筆寫字。',
      english: 'I use a pen to write.',
      words: [
        { character: '我', english: 'I' },
        { character: '用', english: 'use' },
        { character: '筆', english: 'pen', isVocab: true },
        { character: '寫', english: 'write', isVocab: true },
        { character: '字', english: 'character' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '同學和我一起學。',
      english: 'Classmates learn with me.',
      words: [
        { character: '同學', english: 'classmate', isVocab: true },
        { character: '和', english: 'and' },
        { character: '我', english: 'me' },
        { character: '一起', english: 'together' },
        { character: '學', english: 'learn', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '老師教我們。',
      english: 'The teacher teaches us.',
      words: [
        { character: '老師', english: 'teacher', isVocab: true },
        { character: '教', english: 'teach' },
        { character: '我們', english: 'us' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '上學',
      english: 'Going to School',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '學校', english: 'school', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '老師', english: 'teacher', isVocab: true },
        { character: '好', english: 'good' },
        { character: '好', english: 'good' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '和', english: 'and' },
        { character: '同學', english: 'classmates', isVocab: true },
        { character: '讀', english: 'read', isVocab: true },
        { character: '書', english: 'book', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '學', english: 'learn', isVocab: true },
        { character: '好多', english: 'a lot' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 學校 mean?',
      options: ['home', 'school', 'park', 'store'],
      correctAnswer: 'school',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 老師 mean?',
      options: ['student', 'teacher', 'friend', 'parent'],
      correctAnswer: 'teacher',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'book'?",
      options: ['筆', '書', '學', '寫'],
      correctAnswer: '書',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '讀', english: 'read' },
        { chinese: '寫', english: 'write' },
        { chinese: '學', english: 'learn' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '我去學校 means:',
      options: ['I love school', 'I go to school', 'I am at school', 'School is good'],
      correctAnswer: 'I go to school',
    },
  ],
};

export default lesson;
