import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-36',
  theme: 'sports-2',
  icon: '⚽',
  title: {
    chinese: '做運動（二）',
    english: 'Sports (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '籃球', english: 'basketball' },
    { id: 'vocab-02', character: '足球', english: 'soccer' },
    { id: 'vocab-03', character: '乒乓球', english: 'ping pong' },
    { id: 'vocab-04', character: '隊', english: 'team' },
    { id: 'vocab-05', character: '練習', english: 'practice' },
    { id: 'vocab-06', character: '入', english: 'enter, score' },
    { id: 'vocab-07', character: '分', english: 'point, score' },
    { id: 'vocab-08', character: '厲害', english: 'amazing' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我喜歡打籃球。',
      english: 'I like playing basketball.',
      words: [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '打', english: 'play' },
        { character: '籃球', english: 'basketball', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '踢足球好好玩。',
      english: 'Playing soccer is fun.',
      words: [
        { character: '踢', english: 'kick' },
        { character: '足球', english: 'soccer', isVocab: true },
        { character: '好', english: 'so' },
        { character: '好玩', english: 'fun' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我們的隊贏了！',
      english: 'Our team won!',
      words: [
        { character: '我們的', english: 'our' },
        { character: '隊', english: 'team', isVocab: true },
        { character: '贏', english: 'won' },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '每天都要練習。',
      english: 'Need to practice every day.',
      words: [
        { character: '每天', english: 'every day' },
        { character: '都', english: 'all' },
        { character: '要', english: 'need to' },
        { character: '練習', english: 'practice', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '入了一球，得一分！',
      english: 'Scored a goal, got one point!',
      words: [
        { character: '入', english: 'scored', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '一', english: 'one' },
        { character: '球', english: 'ball' },
        { character: '，', english: '', isPunctuation: true },
        { character: '得', english: 'got' },
        { character: '一', english: 'one' },
        { character: '分', english: 'point', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '你打球好厲害！',
      english: 'You play ball amazingly!',
      words: [
        { character: '你', english: 'you' },
        { character: '打球', english: 'play ball' },
        { character: '好', english: 'so' },
        { character: '厲害', english: 'amazing', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '籃球比賽',
      english: 'Basketball Game',
    },
    content: [
      [
        { character: '今天', english: 'today' },
        { character: '有', english: 'have' },
        { character: '籃球', english: 'basketball', isVocab: true },
        { character: '比賽', english: 'match' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'our' },
        { character: '隊', english: 'team', isVocab: true },
        { character: '好', english: 'very' },
        { character: '厲害', english: 'amazing', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '入', english: 'scored', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '好多', english: 'many' },
        { character: '分', english: 'points', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'we' },
        { character: '贏', english: 'won' },
        { character: '了', english: '(completed)' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 籃球 mean?',
      options: ['soccer', 'basketball', 'tennis', 'golf'],
      correctAnswer: 'basketball',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 練習 mean?',
      options: ['game', 'win', 'practice', 'lose'],
      correctAnswer: 'practice',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'team'?",
      options: ['分', '隊', '入', '球'],
      correctAnswer: '隊',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the sports:',
      pairs: [
        { chinese: '籃球', english: 'basketball' },
        { chinese: '足球', english: 'soccer' },
        { chinese: '乒乓球', english: 'ping pong' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '厲害 means:',
      options: ['terrible', 'amazing', 'tired', 'slow'],
      correctAnswer: 'amazing',
    },
  ],
};

export default lesson;
