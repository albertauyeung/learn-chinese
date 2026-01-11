import type { Lesson } from '../types';

const lesson02: Lesson = {
  id: 'lesson-02',
  theme: 'family-1',
  icon: '👨‍👩‍👧‍👦',
  title: {
    chinese: '我的家人（一）',
    english: 'My Family (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '哥哥', english: 'older brother' },
    { id: 'vocab-02', character: '姐姐', english: 'older sister' },
    { id: 'vocab-03', character: '弟弟', english: 'younger brother' },
    { id: 'vocab-04', character: '妹妹', english: 'younger sister' },
    { id: 'vocab-05', character: '有', english: 'have' },
    { id: 'vocab-06', character: '個', english: 'measure word' },
    { id: 'vocab-07', character: '和', english: 'and' },
    { id: 'vocab-08', character: '愛', english: 'love' },
    { id: 'vocab-09', character: '爺爺', english: 'grandpa' },
    { id: 'vocab-10', character: '奶奶', english: 'grandma' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我有哥哥。',
      english: 'I have an older brother.',
      words: [
        { character: '我', english: 'I' },
        { character: '有', english: 'have', isVocab: true },
        { character: '哥哥', english: 'older brother', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '姐姐和妹妹。',
      english: 'Older sister and younger sister.',
      words: [
        { character: '姐姐', english: 'older sister', isVocab: true },
        { character: '和', english: 'and', isVocab: true },
        { character: '妹妹', english: 'younger sister', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我有一個弟弟。',
      english: 'I have one younger brother.',
      words: [
        { character: '我', english: 'I' },
        { character: '有', english: 'have', isVocab: true },
        { character: '一', english: 'one' },
        { character: '個', english: 'measure word', isVocab: true },
        { character: '弟弟', english: 'younger brother', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我愛媽媽。',
      english: 'I love mom.',
      words: [
        { character: '我', english: 'I' },
        { character: '愛', english: 'love', isVocab: true },
        { character: '媽媽', english: 'mom' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '哥哥和弟弟。',
      english: 'Older brother and younger brother.',
      words: [
        { character: '哥哥', english: 'older brother', isVocab: true },
        { character: '和', english: 'and', isVocab: true },
        { character: '弟弟', english: 'younger brother', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '我愛我的家人。',
      english: 'I love my family.',
      words: [
        { character: '我', english: 'I' },
        { character: '愛', english: 'love', isVocab: true },
        { character: '我的', english: 'my' },
        { character: '家人', english: 'family' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-07',
      chinese: '爺爺好好。',
      english: 'Grandpa is very good.',
      words: [
        { character: '爺爺', english: 'grandpa', isVocab: true },
        { character: '好', english: 'very' },
        { character: '好', english: 'good' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-08',
      chinese: '我愛奶奶。',
      english: 'I love grandma.',
      words: [
        { character: '我', english: 'I' },
        { character: '愛', english: 'love', isVocab: true },
        { character: '奶奶', english: 'grandma', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '我的家人',
      english: 'My Family',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '有', english: 'have', isVocab: true },
        { character: '哥哥', english: 'older brother', isVocab: true },
        { character: '和', english: 'and', isVocab: true },
        { character: '妹妹', english: 'younger sister', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '哥哥', english: 'older brother', isVocab: true },
        { character: '好', english: 'good' },
        { character: '好', english: 'good' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '妹妹', english: 'younger sister', isVocab: true },
        { character: '好', english: 'good' },
        { character: '可愛', english: 'cute' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '愛', english: 'love', isVocab: true },
        { character: '我的', english: 'my' },
        { character: '家人', english: 'family' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 哥哥 mean?',
      options: ['younger brother', 'older brother', 'sister', 'dad'],
      correctAnswer: 1,
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 妹妹 mean?',
      options: ['older sister', 'younger sister', 'mom', 'brother'],
      correctAnswer: 1,
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'love'?",
      options: ['有', '和', '愛', '個'],
      correctAnswer: 2,
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the siblings:',
      pairs: [
        { chinese: '哥哥', english: 'older brother' },
        { chinese: '姐姐', english: 'older sister' },
        { chinese: '弟弟', english: 'younger brother' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '我有哥哥 means:',
      options: ['I am older brother', 'I have an older brother', 'I love older brother', 'Older brother is good'],
      correctAnswer: 1,
    },
    {
      id: 'q6',
      type: 'multiple-choice',
      question: 'What does 爺爺 mean?',
      options: ['grandma', 'grandpa', 'uncle', 'aunt'],
      correctAnswer: 1,
    },
    {
      id: 'q7',
      type: 'multiple-choice',
      question: 'What does 奶奶 mean?',
      options: ['grandpa', 'grandma', 'mom', 'sister'],
      correctAnswer: 1,
    },
    {
      id: 'q8',
      type: 'multiple-choice',
      question: "Which word means 'older sister'?",
      options: ['哥哥', '弟弟', '姐姐', '妹妹'],
      correctAnswer: 2,
    },
  ],
};

export default lesson02;
