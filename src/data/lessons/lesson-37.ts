import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-37',
  theme: 'animals-2',
  icon: '🐕',
  title: {
    chinese: '動物（二）',
    english: 'Animals (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '兔', english: 'rabbit' },
    { id: 'vocab-02', character: '熊貓', english: 'panda' },
    { id: 'vocab-03', character: '猴子', english: 'monkey' },
    { id: 'vocab-04', character: '大象', english: 'elephant' },
    { id: 'vocab-05', character: '動物園', english: 'zoo' },
    { id: 'vocab-06', character: '餵', english: 'feed' },
    { id: 'vocab-07', character: '跳', english: 'jump' },
    { id: 'vocab-08', character: '爬', english: 'climb' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '兔子跳得好高。',
      english: 'Rabbits jump very high.',
      words: [
        { character: '兔', english: 'rabbit', isVocab: true },
        { character: '子', english: '(suffix)' },
        { character: '跳', english: 'jump', isVocab: true },
        { character: '得', english: '(complement marker)' },
        { character: '好', english: 'very' },
        { character: '高', english: 'high' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '熊貓吃竹子。',
      english: 'Pandas eat bamboo.',
      words: [
        { character: '熊貓', english: 'panda', isVocab: true },
        { character: '吃', english: 'eat' },
        { character: '竹子', english: 'bamboo' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '猴子爬樹好快。',
      english: 'Monkeys climb trees very fast.',
      words: [
        { character: '猴子', english: 'monkey', isVocab: true },
        { character: '爬', english: 'climb', isVocab: true },
        { character: '樹', english: 'tree' },
        { character: '好', english: 'very' },
        { character: '快', english: 'fast' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '大象好大！',
      english: 'Elephants are so big!',
      words: [
        { character: '大象', english: 'elephant', isVocab: true },
        { character: '好', english: 'so' },
        { character: '大', english: 'big' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我們去動物園。',
      english: 'We go to the zoo.',
      words: [
        { character: '我們', english: 'we' },
        { character: '去', english: 'go' },
        { character: '動物園', english: 'zoo', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '不可以餵動物。',
      english: 'Cannot feed the animals.',
      words: [
        { character: '不可以', english: 'cannot' },
        { character: '餵', english: 'feed', isVocab: true },
        { character: '動物', english: 'animals' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '去動物園',
      english: 'Going to the Zoo',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '動物園', english: 'zoo', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '熊貓', english: 'panda', isVocab: true },
        { character: '好', english: 'so' },
        { character: '可愛', english: 'cute' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '猴子', english: 'monkey', isVocab: true },
        { character: '爬', english: 'climb', isVocab: true },
        { character: '來', english: 'come' },
        { character: '爬', english: 'climb', isVocab: true },
        { character: '去', english: 'go' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '大象', english: 'elephant', isVocab: true },
        { character: '好', english: 'so' },
        { character: '大', english: 'big' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 熊貓 mean?',
      options: ['bear', 'panda', 'cat', 'dog'],
      correctAnswer: 'panda',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 動物園 mean?',
      options: ['park', 'garden', 'zoo', 'farm'],
      correctAnswer: 'zoo',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'monkey'?",
      options: ['兔', '熊貓', '猴子', '大象'],
      correctAnswer: '猴子',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the animals:',
      pairs: [
        { chinese: '熊貓', english: 'panda' },
        { chinese: '大象', english: 'elephant' },
        { chinese: '猴子', english: 'monkey' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '餵 means:',
      options: ['play', 'feed', 'pet', 'watch'],
      correctAnswer: 'feed',
    },
  ],
};

export default lesson;
