import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-45',
  theme: 'playground-3',
  icon: '🎢',
  title: {
    chinese: '遊樂場（三）',
    english: 'At the Playground (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '蹺蹺板', english: 'seesaw' },
    { id: 'vocab-02', character: '沙池', english: 'sandbox' },
    { id: 'vocab-03', character: '攀爬架', english: 'climbing frame' },
    { id: 'vocab-04', character: '遵守', english: 'follow, obey' },
    { id: 'vocab-05', character: '規則', english: 'rules' },
    { id: 'vocab-06', character: '禮讓', english: 'be courteous' },
    { id: 'vocab-07', character: '保持', english: 'keep, maintain' },
    { id: 'vocab-08', character: '整潔', english: 'tidy' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我們玩蹺蹺板。',
      english: 'We play on the seesaw.',
      words: [
        { character: '我們', english: 'we' },
        { character: '玩', english: 'play' },
        { character: '蹺蹺板', english: 'seesaw', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '弟弟在沙池玩沙。',
      english: 'Little brother plays sand in the sandbox.',
      words: [
        { character: '弟弟', english: 'little brother' },
        { character: '在', english: 'at' },
        { character: '沙池', english: 'sandbox', isVocab: true },
        { character: '玩', english: 'play' },
        { character: '沙', english: 'sand' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '攀爬架好高！',
      english: 'The climbing frame is so tall!',
      words: [
        { character: '攀爬架', english: 'climbing frame', isVocab: true },
        { character: '好', english: 'so' },
        { character: '高', english: 'tall' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '要遵守規則。',
      english: 'Must follow the rules.',
      words: [
        { character: '要', english: 'must' },
        { character: '遵守', english: 'follow', isVocab: true },
        { character: '規則', english: 'rules', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '大家要禮讓。',
      english: 'Everyone should be courteous.',
      words: [
        { character: '大家', english: 'everyone' },
        { character: '要', english: 'should' },
        { character: '禮讓', english: 'be courteous', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '保持遊樂場整潔。',
      english: 'Keep the playground tidy.',
      words: [
        { character: '保持', english: 'keep', isVocab: true },
        { character: '遊樂場', english: 'playground' },
        { character: '整潔', english: 'tidy', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '遊樂場規則',
      english: 'Playground Rules',
    },
    content: [
      [
        { character: '遊樂場', english: 'playground' },
        { character: '有', english: 'has' },
        { character: '規則', english: 'rules', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '要', english: 'should' },
        { character: '排隊', english: 'line up' },
        { character: '，', english: '', isPunctuation: true },
        { character: '要', english: 'should' },
        { character: '禮讓', english: 'be courteous', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '保持', english: 'keep', isVocab: true },
        { character: '整潔', english: 'tidy', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '大家', english: 'everyone' },
        { character: '玩', english: 'play' },
        { character: '得', english: '(complement marker)' },
        { character: '開心', english: 'happy' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 蹺蹺板 mean?',
      options: ['slide', 'swing', 'seesaw', 'sandbox'],
      correctAnswer: 'seesaw',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 遵守 mean?',
      options: ['break', 'follow', 'ignore', 'change'],
      correctAnswer: 'follow',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'tidy'?",
      options: ['規則', '整潔', '禮讓', '保持'],
      correctAnswer: '整潔',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the playground:',
      pairs: [
        { chinese: '蹺蹺板', english: 'seesaw' },
        { chinese: '沙池', english: 'sandbox' },
        { chinese: '攀爬架', english: 'climbing frame' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '規則 means:',
      options: ['fun', 'rules', 'games', 'toys'],
      correctAnswer: 'rules',
    },
  ],
};

export default lesson;
