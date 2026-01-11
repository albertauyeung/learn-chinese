import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-22',
  theme: 'family-2',
  icon: '👨‍👩‍👧‍👦',
  title: {
    chinese: '我的家人（二）',
    english: 'My Family (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '爺爺', english: 'grandpa (paternal)' },
    { id: 'vocab-02', character: '奶奶', english: 'grandma (paternal)' },
    { id: 'vocab-03', character: '外公', english: 'grandpa (maternal)' },
    { id: 'vocab-04', character: '外婆', english: 'grandma (maternal)' },
    { id: 'vocab-05', character: '叔叔', english: 'uncle' },
    { id: 'vocab-06', character: '阿姨', english: 'aunt' },
    { id: 'vocab-07', character: '表', english: 'cousin (prefix)' },
    { id: 'vocab-08', character: '老', english: 'old' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '爺爺奶奶住在香港。',
      english: 'Grandpa and grandma live in Hong Kong.',
      words: [
        { character: '爺爺', english: 'grandpa', isVocab: true },
        { character: '奶奶', english: 'grandma', isVocab: true },
        { character: '住', english: 'live' },
        { character: '在', english: 'in' },
        { character: '香港', english: 'Hong Kong' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '外婆煮飯好好吃。',
      english: "Grandma's cooking is delicious.",
      words: [
        { character: '外婆', english: 'grandma', isVocab: true },
        { character: '煮飯', english: 'cook' },
        { character: '好', english: 'very' },
        { character: '好吃', english: 'delicious' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '叔叔和阿姨來我家。',
      english: 'Uncle and aunt come to my home.',
      words: [
        { character: '叔叔', english: 'uncle', isVocab: true },
        { character: '和', english: 'and' },
        { character: '阿姨', english: 'aunt', isVocab: true },
        { character: '來', english: 'come' },
        { character: '我家', english: 'my home' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我有一個表哥。',
      english: 'I have one older male cousin.',
      words: [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '一個', english: 'one' },
        { character: '表', english: 'cousin', isVocab: true },
        { character: '哥', english: 'older brother' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '外公好老了。',
      english: 'Grandpa is very old now.',
      words: [
        { character: '外公', english: 'grandpa', isVocab: true },
        { character: '好', english: 'very' },
        { character: '老', english: 'old', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '我愛我的家人。',
      english: 'I love my family.',
      words: [
        { character: '我', english: 'I' },
        { character: '愛', english: 'love' },
        { character: '我的', english: 'my' },
        { character: '家人', english: 'family' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '過年見家人',
      english: 'Seeing Family at New Year',
    },
    content: [
      [
        { character: '新年', english: 'New Year' },
        { character: '到', english: 'arrive' },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '爺爺', english: 'grandpa', isVocab: true },
        { character: '奶奶', english: 'grandma', isVocab: true },
        { character: '來', english: 'come' },
        { character: '我家', english: 'my home' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '叔叔', english: 'uncle', isVocab: true },
        { character: '阿姨', english: 'aunt', isVocab: true },
        { character: '也', english: 'also' },
        { character: '來', english: 'come' },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
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
      question: 'What does 爺爺 mean?',
      options: ['grandma', 'grandpa (paternal)', 'uncle', 'aunt'],
      correctAnswer: 'grandpa (paternal)',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 外婆 mean?',
      options: ['grandpa (maternal)', 'grandma (maternal)', 'aunt', 'uncle'],
      correctAnswer: 'grandma (maternal)',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'aunt'?",
      options: ['叔叔', '阿姨', '外公', '奶奶'],
      correctAnswer: '阿姨',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the relatives:',
      pairs: [
        { chinese: '爺爺', english: 'grandpa (paternal)' },
        { chinese: '外婆', english: 'grandma (maternal)' },
        { chinese: '叔叔', english: 'uncle' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '老 means:',
      options: ['young', 'old', 'tall', 'big'],
      correctAnswer: 'old',
    },
  ],
};

export default lesson;
