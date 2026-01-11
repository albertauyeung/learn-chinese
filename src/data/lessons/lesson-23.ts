import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-23',
  theme: 'school-2',
  icon: '🏫',
  title: {
    chinese: '在學校（二）',
    english: 'At School (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '班', english: 'class' },
    { id: 'vocab-02', character: '功課', english: 'homework' },
    { id: 'vocab-03', character: '考試', english: 'exam' },
    { id: 'vocab-04', character: '課室', english: 'classroom' },
    { id: 'vocab-05', character: '操場', english: 'playground' },
    { id: 'vocab-06', character: '教', english: 'teach' },
    { id: 'vocab-07', character: '難', english: 'difficult' },
    { id: 'vocab-08', character: '易', english: 'easy' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我在一年班。',
      english: 'I am in Grade 1.',
      words: [
        { character: '我', english: 'I' },
        { character: '在', english: 'am in' },
        { character: '一', english: 'one' },
        { character: '年', english: 'year' },
        { character: '班', english: 'class', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我做功課。',
      english: 'I do homework.',
      words: [
        { character: '我', english: 'I' },
        { character: '做', english: 'do' },
        { character: '功課', english: 'homework', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '明天有考試。',
      english: 'There is an exam tomorrow.',
      words: [
        { character: '明天', english: 'tomorrow' },
        { character: '有', english: 'have' },
        { character: '考試', english: 'exam', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '課室在三樓。',
      english: 'The classroom is on the third floor.',
      words: [
        { character: '課室', english: 'classroom', isVocab: true },
        { character: '在', english: 'is on' },
        { character: '三', english: 'three' },
        { character: '樓', english: 'floor' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '這道題好難。',
      english: 'This question is very difficult.',
      words: [
        { character: '這', english: 'this' },
        { character: '道', english: '(measure word)' },
        { character: '題', english: 'question' },
        { character: '好', english: 'very' },
        { character: '難', english: 'difficult', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '老師教我們中文。',
      english: 'The teacher teaches us Chinese.',
      words: [
        { character: '老師', english: 'teacher' },
        { character: '教', english: 'teach', isVocab: true },
        { character: '我們', english: 'us' },
        { character: '中文', english: 'Chinese' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '考試日',
      english: 'Exam Day',
    },
    content: [
      [
        { character: '今天', english: 'today' },
        { character: '有', english: 'have' },
        { character: '考試', english: 'exam', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '考試', english: 'exam', isVocab: true },
        { character: '有點', english: 'a bit' },
        { character: '難', english: 'difficult', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '但是', english: 'but' },
        { character: '我', english: 'I' },
        { character: '做', english: 'did' },
        { character: '好', english: 'well' },
        { character: '功課', english: 'homework', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '考試', english: 'exam', isVocab: true },
        { character: '沒', english: 'not' },
        { character: '問題', english: 'problem' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 功課 mean?',
      options: ['exam', 'homework', 'class', 'teacher'],
      correctAnswer: 'homework',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 考試 mean?',
      options: ['homework', 'exam', 'class', 'lesson'],
      correctAnswer: 'exam',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'difficult'?",
      options: ['易', '難', '教', '班'],
      correctAnswer: '難',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '難', english: 'difficult' },
        { chinese: '易', english: 'easy' },
        { chinese: '教', english: 'teach' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '課室 means:',
      options: ['classroom', 'homework', 'playground', 'exam'],
      correctAnswer: 'classroom',
    },
  ],
};

export default lesson;
