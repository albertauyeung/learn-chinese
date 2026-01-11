import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-17',
  theme: 'animals-1',
  icon: '🐕',
  title: {
    chinese: '動物（一）',
    english: 'Animals (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '動物', english: 'animal' },
    { id: 'vocab-02', character: '狗', english: 'dog' },
    { id: 'vocab-03', character: '貓', english: 'cat' },
    { id: 'vocab-04', character: '魚', english: 'fish' },
    { id: 'vocab-05', character: '鳥', english: 'bird' },
    { id: 'vocab-06', character: '可愛', english: 'cute' },
    { id: 'vocab-07', character: '叫', english: 'call, bark' },
    { id: 'vocab-08', character: '養', english: 'raise, keep' },
    { id: 'vocab-09', character: '兔', english: 'rabbit' },
    { id: 'vocab-10', character: '豬', english: 'pig' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我喜歡動物。',
      english: 'I like animals.',
      words: [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '動物', english: 'animals', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '狗在叫。',
      english: 'The dog is barking.',
      words: [
        { character: '狗', english: 'dog', isVocab: true },
        { character: '在', english: 'is' },
        { character: '叫', english: 'barking', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '貓好可愛！',
      english: 'The cat is so cute!',
      words: [
        { character: '貓', english: 'cat', isVocab: true },
        { character: '好', english: 'so' },
        { character: '可愛', english: 'cute', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '魚在水裡。',
      english: 'The fish is in the water.',
      words: [
        { character: '魚', english: 'fish', isVocab: true },
        { character: '在', english: 'is' },
        { character: '水', english: 'water' },
        { character: '裡', english: 'in' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '鳥會飛。',
      english: 'Birds can fly.',
      words: [
        { character: '鳥', english: 'bird', isVocab: true },
        { character: '會', english: 'can' },
        { character: '飛', english: 'fly' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '我想養狗。',
      english: 'I want to keep a dog.',
      words: [
        { character: '我', english: 'I' },
        { character: '想', english: 'want' },
        { character: '養', english: 'keep', isVocab: true },
        { character: '狗', english: 'dog', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-07',
      chinese: '兔好可愛！',
      english: 'The rabbit is so cute!',
      words: [
        { character: '兔', english: 'rabbit', isVocab: true },
        { character: '好', english: 'so' },
        { character: '可愛', english: 'cute', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-08',
      chinese: '豬好肥。',
      english: 'The pig is very fat.',
      words: [
        { character: '豬', english: 'pig', isVocab: true },
        { character: '好', english: 'very' },
        { character: '肥', english: 'fat' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '我的寵物',
      english: 'My Pet',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '養', english: 'keep', isVocab: true },
        { character: '狗', english: 'dog', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '狗', english: 'dog', isVocab: true },
        { character: '好', english: 'so' },
        { character: '可愛', english: 'cute', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '狗', english: 'dog', isVocab: true },
        { character: '叫', english: 'bark', isVocab: true },
        { character: '汪汪', english: 'woof woof' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '愛', english: 'love' },
        { character: '我的', english: 'my' },
        { character: '狗', english: 'dog', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 狗 mean?',
      options: ['cat', 'dog', 'bird', 'fish'],
      correctAnswer: 1,
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 可愛 mean?',
      options: ['big', 'small', 'cute', 'fast'],
      correctAnswer: 2,
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'cat'?",
      options: ['狗', '貓', '鳥', '魚'],
      correctAnswer: 1,
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the animals:',
      pairs: [
        { chinese: '狗', english: 'dog' },
        { chinese: '貓', english: 'cat' },
        { chinese: '魚', english: 'fish' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '鳥會飛 means:',
      options: ['Birds can swim', 'Birds can fly', 'Birds can run', 'Birds can sing'],
      correctAnswer: 1,
    },
    {
      id: 'q6',
      type: 'multiple-choice',
      question: 'What does 兔 mean?',
      options: ['mouse', 'rabbit', 'hamster', 'squirrel'],
      correctAnswer: 1,
    },
    {
      id: 'q7',
      type: 'multiple-choice',
      question: "Which word means 'pig'?",
      options: ['狗', '貓', '豬', '兔'],
      correctAnswer: 2,
    },
    {
      id: 'q8',
      type: 'multiple-choice',
      question: '我想養狗 means:',
      options: ['I have a dog', 'I want to keep a dog', 'I see a dog', 'I like dogs'],
      correctAnswer: 1,
    },
  ],
};

export default lesson;
