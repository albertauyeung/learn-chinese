import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-46',
  theme: 'times-3',
  icon: '⏰',
  title: {
    chinese: '一天的時間（三）',
    english: 'Times of Day (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '時間表', english: 'schedule' },
    { id: 'vocab-02', character: '準時', english: 'on time' },
    { id: 'vocab-03', character: '遲到', english: 'late' },
    { id: 'vocab-04', character: '計劃', english: 'plan' },
    { id: 'vocab-05', character: '期限', english: 'deadline' },
    { id: 'vocab-06', character: '提早', english: 'early' },
    { id: 'vocab-07', character: '節省', english: 'save' },
    { id: 'vocab-08', character: '珍惜', english: 'treasure' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '看看時間表。',
      english: 'Check the schedule.',
      words: [
        { character: '看看', english: 'check' },
        { character: '時間表', english: 'schedule', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '上學要準時。',
      english: 'Be on time for school.',
      words: [
        { character: '上學', english: 'school' },
        { character: '要', english: 'must' },
        { character: '準時', english: 'on time', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '不要遲到！',
      english: "Don't be late!",
      words: [
        { character: '不要', english: "don't" },
        { character: '遲到', english: 'late', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '做好計劃。',
      english: 'Make a good plan.',
      words: [
        { character: '做', english: 'make' },
        { character: '好', english: 'good' },
        { character: '計劃', english: 'plan', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '在期限前完成。',
      english: 'Finish before the deadline.',
      words: [
        { character: '在', english: 'before' },
        { character: '期限', english: 'deadline', isVocab: true },
        { character: '前', english: 'before' },
        { character: '完成', english: 'finish' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '珍惜時間。',
      english: 'Treasure time.',
      words: [
        { character: '珍惜', english: 'treasure', isVocab: true },
        { character: '時間', english: 'time' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '時間管理',
      english: 'Time Management',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '時間表', english: 'schedule', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '每天', english: 'every day' },
        { character: '準時', english: 'on time', isVocab: true },
        { character: '上學', english: 'go to school' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '計劃', english: 'plan', isVocab: true },
        { character: '好', english: 'well' },
        { character: '時間', english: 'time' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '不會', english: "won't" },
        { character: '遲到', english: 'late', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 時間表 mean?',
      options: ['watch', 'schedule', 'calendar', 'clock'],
      correctAnswer: 'schedule',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 準時 mean?',
      options: ['late', 'early', 'on time', 'slow'],
      correctAnswer: 'on time',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'plan'?",
      options: ['期限', '計劃', '遲到', '準時'],
      correctAnswer: '計劃',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '準時', english: 'on time' },
        { chinese: '遲到', english: 'late' },
        { chinese: '提早', english: 'early' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '期限 means:',
      options: ['beginning', 'deadline', 'middle', 'end'],
      correctAnswer: 'deadline',
    },
  ],
};

export default lesson;
