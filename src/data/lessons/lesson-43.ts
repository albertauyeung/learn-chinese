import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-43',
  theme: 'school-3',
  icon: '🏫',
  title: {
    chinese: '在學校（三）',
    english: 'At School (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '成績', english: 'grades, results' },
    { id: 'vocab-02', character: '努力', english: 'work hard' },
    { id: 'vocab-03', character: '進步', english: 'improve' },
    { id: 'vocab-04', character: '科目', english: 'subject' },
    { id: 'vocab-05', character: '討論', english: 'discuss' },
    { id: 'vocab-06', character: '問題', english: 'question, problem' },
    { id: 'vocab-07', character: '明白', english: 'understand' },
    { id: 'vocab-08', character: '複習', english: 'review' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我的成績進步了。',
      english: 'My grades improved.',
      words: [
        { character: '我的', english: 'my' },
        { character: '成績', english: 'grades', isVocab: true },
        { character: '進步', english: 'improved', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '要努力讀書。',
      english: 'Must work hard to study.',
      words: [
        { character: '要', english: 'must' },
        { character: '努力', english: 'work hard', isVocab: true },
        { character: '讀書', english: 'study' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '你最喜歡什麼科目？',
      english: 'What subject do you like most?',
      words: [
        { character: '你', english: 'you' },
        { character: '最', english: 'most' },
        { character: '喜歡', english: 'like' },
        { character: '什麼', english: 'what' },
        { character: '科目', english: 'subject', isVocab: true },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '同學一起討論問題。',
      english: 'Classmates discuss questions together.',
      words: [
        { character: '同學', english: 'classmates' },
        { character: '一起', english: 'together' },
        { character: '討論', english: 'discuss', isVocab: true },
        { character: '問題', english: 'question', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '你明白嗎？',
      english: 'Do you understand?',
      words: [
        { character: '你', english: 'you' },
        { character: '明白', english: 'understand', isVocab: true },
        { character: '嗎', english: '(question)' },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '考試前要複習。',
      english: 'Need to review before exam.',
      words: [
        { character: '考試', english: 'exam' },
        { character: '前', english: 'before' },
        { character: '要', english: 'need to' },
        { character: '複習', english: 'review', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '努力學習',
      english: 'Study Hard',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '努力', english: 'work hard', isVocab: true },
        { character: '讀書', english: 'study' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '每天', english: 'every day' },
        { character: '複習', english: 'review', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '成績', english: 'grades', isVocab: true },
        { character: '進步', english: 'improve', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '老師', english: 'teacher' },
        { character: '說', english: 'said' },
        { character: '好', english: 'very' },
        { character: '好', english: 'good' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 成績 mean?',
      options: ['homework', 'grades', 'class', 'teacher'],
      correctAnswer: 'grades',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 努力 mean?',
      options: ['lazy', 'work hard', 'easy', 'fun'],
      correctAnswer: 'work hard',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'understand'?",
      options: ['討論', '問題', '明白', '複習'],
      correctAnswer: '明白',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '進步', english: 'improve' },
        { chinese: '討論', english: 'discuss' },
        { chinese: '複習', english: 'review' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '科目 means:',
      options: ['teacher', 'subject', 'student', 'school'],
      correctAnswer: 'subject',
    },
  ],
};

export default lesson;
