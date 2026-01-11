import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-40',
  theme: 'hobbies-2',
  icon: '🎨',
  title: {
    chinese: '我的興趣（二）',
    english: 'My Hobbies (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '打機', english: 'play video games' },
    { id: 'vocab-02', character: '電影', english: 'movie' },
    { id: 'vocab-03', character: '彈琴', english: 'play piano' },
    { id: 'vocab-04', character: '攝影', english: 'photography' },
    { id: 'vocab-05', character: '有趣', english: 'interesting' },
    { id: 'vocab-06', character: '悶', english: 'boring' },
    { id: 'vocab-07', character: '學', english: 'learn' },
    { id: 'vocab-08', character: '每', english: 'every' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我喜歡打機。',
      english: 'I like playing video games.',
      words: [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '打機', english: 'play video games', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我們一起看電影。',
      english: 'We watch movies together.',
      words: [
        { character: '我們', english: 'we' },
        { character: '一起', english: 'together' },
        { character: '看', english: 'watch' },
        { character: '電影', english: 'movie', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '姐姐會彈琴。',
      english: 'Sister can play piano.',
      words: [
        { character: '姐姐', english: 'sister' },
        { character: '會', english: 'can' },
        { character: '彈琴', english: 'play piano', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '攝影好有趣！',
      english: 'Photography is so interesting!',
      words: [
        { character: '攝影', english: 'photography', isVocab: true },
        { character: '好', english: 'so' },
        { character: '有趣', english: 'interesting', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我想學游水。',
      english: 'I want to learn swimming.',
      words: [
        { character: '我', english: 'I' },
        { character: '想', english: 'want' },
        { character: '學', english: 'learn', isVocab: true },
        { character: '游水', english: 'swimming' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '每個星期六上堂。',
      english: 'Have class every Saturday.',
      words: [
        { character: '每', english: 'every', isVocab: true },
        { character: '個', english: '(measure word)' },
        { character: '星期六', english: 'Saturday' },
        { character: '上堂', english: 'have class' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '學新東西',
      english: 'Learning New Things',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '好多', english: 'many' },
        { character: '興趣', english: 'hobbies' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '學', english: 'learn', isVocab: true },
        { character: '彈琴', english: 'piano', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '攝影', english: 'photography', isVocab: true },
        { character: '好', english: 'very' },
        { character: '有趣', english: 'interesting', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '學', english: 'learning', isVocab: true },
        { character: '新', english: 'new' },
        { character: '東西', english: 'things' },
        { character: '好', english: 'very' },
        { character: '開心', english: 'happy' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 打機 mean?',
      options: ['play sports', 'play video games', 'play music', 'watch TV'],
      correctAnswer: 'play video games',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 電影 mean?',
      options: ['TV show', 'movie', 'music', 'book'],
      correctAnswer: 'movie',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'interesting'?",
      options: ['悶', '有趣', '學', '每'],
      correctAnswer: '有趣',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the hobbies:',
      pairs: [
        { chinese: '打機', english: 'play video games' },
        { chinese: '彈琴', english: 'play piano' },
        { chinese: '攝影', english: 'photography' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '悶 means:',
      options: ['fun', 'boring', 'exciting', 'tiring'],
      correctAnswer: 'boring',
    },
  ],
};

export default lesson;
