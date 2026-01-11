import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-05',
  theme: 'playground-1',
  icon: '🎢',
  title: {
    chinese: '遊樂場（一）',
    english: 'At the Playground (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '遊樂場', english: 'playground' },
    { id: 'vocab-02', character: '跑', english: 'run' },
    { id: 'vocab-03', character: '跳', english: 'jump' },
    { id: 'vocab-04', character: '球', english: 'ball' },
    { id: 'vocab-05', character: '快', english: 'fast' },
    { id: 'vocab-06', character: '慢', english: 'slow' },
    { id: 'vocab-07', character: '高', english: 'high, tall' },
    { id: 'vocab-08', character: '小心', english: 'be careful' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我去遊樂場。',
      english: 'I go to the playground.',
      words: [
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '遊樂場', english: 'playground', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我跑得好快。',
      english: 'I run very fast.',
      words: [
        { character: '我', english: 'I' },
        { character: '跑', english: 'run', isVocab: true },
        { character: '得', english: '(complement marker)' },
        { character: '好', english: 'very' },
        { character: '快', english: 'fast', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '弟弟跳得高。',
      english: 'Little brother jumps high.',
      words: [
        { character: '弟弟', english: 'younger brother' },
        { character: '跳', english: 'jump', isVocab: true },
        { character: '得', english: '(complement marker)' },
        { character: '高', english: 'high', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我玩球。',
      english: 'I play with the ball.',
      words: [
        { character: '我', english: 'I' },
        { character: '玩', english: 'play' },
        { character: '球', english: 'ball', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '小心！慢慢跑。',
      english: 'Be careful! Run slowly.',
      words: [
        { character: '小心', english: 'be careful', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
        { character: '慢', english: 'slow', isVocab: true },
        { character: '慢', english: 'slow', isVocab: true },
        { character: '跑', english: 'run', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '遊樂場好好玩。',
      english: 'The playground is so fun.',
      words: [
        { character: '遊樂場', english: 'playground', isVocab: true },
        { character: '好', english: 'so' },
        { character: '好玩', english: 'fun' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '遊樂場玩',
      english: 'Playing at the Playground',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '去', english: 'go' },
        { character: '遊樂場', english: 'playground', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '跑', english: 'run', isVocab: true },
        { character: '得', english: '(complement marker)' },
        { character: '快', english: 'fast', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '跳', english: 'jump', isVocab: true },
        { character: '得', english: '(complement marker)' },
        { character: '高', english: 'high', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '好', english: 'so' },
        { character: '好玩', english: 'fun' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 遊樂場 mean?',
      options: ['school', 'home', 'playground', 'restaurant'],
      correctAnswer: 'playground',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 跑 mean?',
      options: ['walk', 'run', 'jump', 'sit'],
      correctAnswer: 'run',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'ball'?",
      options: ['跑', '跳', '球', '快'],
      correctAnswer: '球',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '快', english: 'fast' },
        { chinese: '慢', english: 'slow' },
        { chinese: '高', english: 'high' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '小心 means:',
      options: ['be happy', 'be careful', 'be fast', 'be slow'],
      correctAnswer: 'be careful',
    },
  ],
};

export default lesson;
