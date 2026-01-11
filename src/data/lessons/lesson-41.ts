import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-41',
  theme: 'at-home-3',
  icon: '🏠',
  title: {
    chinese: '在家裡（三）',
    english: 'At Home (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '傢俬', english: 'furniture' },
    { id: 'vocab-02', character: '梳化', english: 'sofa' },
    { id: 'vocab-03', character: '床', english: 'bed' },
    { id: 'vocab-04', character: '枱', english: 'table' },
    { id: 'vocab-05', character: '櫃', english: 'cabinet' },
    { id: 'vocab-06', character: '整理', english: 'organize, tidy' },
    { id: 'vocab-07', character: '乾淨', english: 'clean' },
    { id: 'vocab-08', character: '舒適', english: 'comfortable' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '客廳有梳化和枱。',
      english: 'The living room has a sofa and table.',
      words: [
        { character: '客廳', english: 'living room' },
        { character: '有', english: 'has' },
        { character: '梳化', english: 'sofa', isVocab: true },
        { character: '和', english: 'and' },
        { character: '枱', english: 'table', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我的床很舒適。',
      english: 'My bed is very comfortable.',
      words: [
        { character: '我的', english: 'my' },
        { character: '床', english: 'bed', isVocab: true },
        { character: '很', english: 'very' },
        { character: '舒適', english: 'comfortable', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '媽媽整理傢俬。',
      english: 'Mom organizes the furniture.',
      words: [
        { character: '媽媽', english: 'mom' },
        { character: '整理', english: 'organize', isVocab: true },
        { character: '傢俬', english: 'furniture', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '房間很乾淨。',
      english: 'The room is very clean.',
      words: [
        { character: '房間', english: 'room' },
        { character: '很', english: 'very' },
        { character: '乾淨', english: 'clean', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '書放在櫃裡面。',
      english: 'Books are put in the cabinet.',
      words: [
        { character: '書', english: 'books' },
        { character: '放', english: 'put' },
        { character: '在', english: 'in' },
        { character: '櫃', english: 'cabinet', isVocab: true },
        { character: '裡面', english: 'inside' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '新傢俬好靚！',
      english: 'The new furniture is beautiful!',
      words: [
        { character: '新', english: 'new' },
        { character: '傢俬', english: 'furniture', isVocab: true },
        { character: '好', english: 'so' },
        { character: '靚', english: 'beautiful' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '新家',
      english: 'New Home',
    },
    content: [
      [
        { character: '我們', english: 'we' },
        { character: '搬', english: 'move' },
        { character: '新家', english: 'new home' },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '傢俬', english: 'furniture', isVocab: true },
        { character: '都', english: 'all' },
        { character: '是', english: 'are' },
        { character: '新', english: 'new' },
        { character: '的', english: "'s" },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我的', english: 'my' },
        { character: '床', english: 'bed', isVocab: true },
        { character: '好', english: 'very' },
        { character: '舒適', english: 'comfortable', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '好', english: 'so' },
        { character: '開心', english: 'happy' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 傢俬 mean?',
      options: ['house', 'furniture', 'room', 'floor'],
      correctAnswer: 'furniture',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 梳化 mean?',
      options: ['chair', 'sofa', 'bed', 'table'],
      correctAnswer: 'sofa',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'clean'?",
      options: ['舒適', '乾淨', '整理', '傢俬'],
      correctAnswer: '乾淨',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the furniture:',
      pairs: [
        { chinese: '梳化', english: 'sofa' },
        { chinese: '床', english: 'bed' },
        { chinese: '枱', english: 'table' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '整理 means:',
      options: ['dirty', 'organize', 'break', 'buy'],
      correctAnswer: 'organize',
    },
  ],
};

export default lesson;
