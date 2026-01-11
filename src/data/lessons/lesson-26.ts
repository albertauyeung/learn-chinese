import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-26',
  theme: 'times-2',
  icon: '⏰',
  title: {
    chinese: '一天的時間（二）',
    english: 'Times of Day (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '中午', english: 'noon' },
    { id: 'vocab-02', character: '下午', english: 'afternoon' },
    { id: 'vocab-03', character: '點鐘', english: "o'clock" },
    { id: 'vocab-04', character: '分鐘', english: 'minute' },
    { id: 'vocab-05', character: '半', english: 'half' },
    { id: 'vocab-06', character: '昨天', english: 'yesterday' },
    { id: 'vocab-07', character: '現在', english: 'now' },
    { id: 'vocab-08', character: '等', english: 'wait' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '現在幾點鐘？',
      english: 'What time is it now?',
      words: [
        { character: '現在', english: 'now', isVocab: true },
        { character: '幾', english: 'what' },
        { character: '點鐘', english: "o'clock", isVocab: true },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '現在三點半。',
      english: 'It is 3:30 now.',
      words: [
        { character: '現在', english: 'now', isVocab: true },
        { character: '三', english: 'three' },
        { character: '點', english: "o'clock" },
        { character: '半', english: 'half', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '中午十二點吃飯。',
      english: 'Eat lunch at 12 noon.',
      words: [
        { character: '中午', english: 'noon', isVocab: true },
        { character: '十二', english: 'twelve' },
        { character: '點', english: "o'clock" },
        { character: '吃飯', english: 'eat' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '下午有課。',
      english: 'There are classes in the afternoon.',
      words: [
        { character: '下午', english: 'afternoon', isVocab: true },
        { character: '有', english: 'have' },
        { character: '課', english: 'class' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '昨天我去游水。',
      english: 'I went swimming yesterday.',
      words: [
        { character: '昨天', english: 'yesterday', isVocab: true },
        { character: '我', english: 'I' },
        { character: '去', english: 'went' },
        { character: '游水', english: 'swim' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '等一分鐘。',
      english: 'Wait one minute.',
      words: [
        { character: '等', english: 'wait', isVocab: true },
        { character: '一', english: 'one' },
        { character: '分鐘', english: 'minute', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '我的時間表',
      english: 'My Schedule',
    },
    content: [
      [
        { character: '早上', english: 'morning' },
        { character: '八', english: 'eight' },
        { character: '點鐘', english: "o'clock", isVocab: true },
        { character: '上學', english: 'go to school' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '中午', english: 'noon', isVocab: true },
        { character: '吃', english: 'eat' },
        { character: '午飯', english: 'lunch' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '下午', english: 'afternoon', isVocab: true },
        { character: '三', english: 'three' },
        { character: '點', english: "o'clock" },
        { character: '半', english: 'half', isVocab: true },
        { character: '放學', english: 'finish school' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '好', english: 'very' },
        { character: '忙', english: 'busy' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 中午 mean?',
      options: ['morning', 'noon', 'afternoon', 'evening'],
      correctAnswer: 'noon',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 現在 mean?',
      options: ['yesterday', 'tomorrow', 'now', 'later'],
      correctAnswer: 'now',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'half'?",
      options: ['點鐘', '分鐘', '半', '等'],
      correctAnswer: '半',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '中午', english: 'noon' },
        { chinese: '下午', english: 'afternoon' },
        { chinese: '昨天', english: 'yesterday' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '三點半 means:',
      options: ['3:00', '3:15', '3:30', '3:45'],
      correctAnswer: '3:30',
    },
  ],
};

export default lesson;
