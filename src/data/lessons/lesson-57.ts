import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-57',
  theme: 'animals-3',
  icon: '🐕',
  title: {
    chinese: '動物（三）',
    english: 'Animals (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '瀕危', english: 'endangered' },
    { id: 'vocab-02', character: '保育', english: 'conservation' },
    { id: 'vocab-03', character: '野生', english: 'wild' },
    { id: 'vocab-04', character: '棲息地', english: 'habitat' },
    { id: 'vocab-05', character: '絕種', english: 'extinction' },
    { id: 'vocab-06', character: '環境', english: 'environment' },
    { id: 'vocab-07', character: '愛護', english: 'care for' },
    { id: 'vocab-08', character: '生態', english: 'ecology' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '熊貓是瀕危動物。',
      english: 'Pandas are endangered animals.',
      words: [
        { character: '熊貓', english: 'panda' },
        { character: '是', english: 'are' },
        { character: '瀕危', english: 'endangered', isVocab: true },
        { character: '動物', english: 'animal' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '保育動物很重要。',
      english: 'Animal conservation is very important.',
      words: [
        { character: '保育', english: 'conservation', isVocab: true },
        { character: '動物', english: 'animals' },
        { character: '很', english: 'very' },
        { character: '重要', english: 'important' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '野生動物住在森林。',
      english: 'Wild animals live in forests.',
      words: [
        { character: '野生', english: 'wild', isVocab: true },
        { character: '動物', english: 'animals' },
        { character: '住', english: 'live' },
        { character: '在', english: 'in' },
        { character: '森林', english: 'forest' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '要保護動物的棲息地。',
      english: 'Must protect animals\' habitats.',
      words: [
        { character: '要', english: 'must' },
        { character: '保護', english: 'protect' },
        { character: '動物', english: 'animals' },
        { character: '的', english: "'s" },
        { character: '棲息地', english: 'habitat', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '要愛護環境。',
      english: 'Must care for the environment.',
      words: [
        { character: '要', english: 'must' },
        { character: '愛護', english: 'care for', isVocab: true },
        { character: '環境', english: 'environment', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '不要讓動物絕種。',
      english: "Don't let animals go extinct.",
      words: [
        { character: '不要', english: "don't" },
        { character: '讓', english: 'let' },
        { character: '動物', english: 'animals' },
        { character: '絕種', english: 'extinct', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '愛護動物',
      english: 'Caring for Animals',
    },
    content: [
      [
        { character: '很多', english: 'many' },
        { character: '動物', english: 'animals' },
        { character: '是', english: 'are' },
        { character: '瀕危', english: 'endangered', isVocab: true },
        { character: '的', english: '(possessive)' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'we' },
        { character: '要', english: 'should' },
        { character: '保育', english: 'conserve', isVocab: true },
        { character: '動物', english: 'animals' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '愛護', english: 'care for', isVocab: true },
        { character: '環境', english: 'environment', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '保護', english: 'protect' },
        { character: '地球', english: 'Earth' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 瀕危 mean?',
      options: ['common', 'endangered', 'wild', 'domestic'],
      correctAnswer: 'endangered',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 保育 mean?',
      options: ['hunting', 'conservation', 'feeding', 'training'],
      correctAnswer: 'conservation',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'habitat'?",
      options: ['環境', '棲息地', '野生', '生態'],
      correctAnswer: '棲息地',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '瀕危', english: 'endangered' },
        { chinese: '野生', english: 'wild' },
        { chinese: '絕種', english: 'extinction' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '環境 means:',
      options: ['animal', 'environment', 'forest', 'zoo'],
      correctAnswer: 'environment',
    },
  ],
};

export default lesson;
