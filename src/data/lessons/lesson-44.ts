import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-44',
  theme: 'friends-3',
  icon: '👫',
  title: {
    chinese: '我的朋友（三）',
    english: 'My Friends (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '信任', english: 'trust' },
    { id: 'vocab-02', character: '支持', english: 'support' },
    { id: 'vocab-03', character: '誠實', english: 'honest' },
    { id: 'vocab-04', character: '傾訴', english: 'confide' },
    { id: 'vocab-05', character: '約', english: 'make plans, arrange' },
    { id: 'vocab-06', character: '珍惜', english: 'cherish' },
    { id: 'vocab-07', character: '難過', english: 'sad' },
    { id: 'vocab-08', character: '安慰', english: 'comfort' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '朋友之間要信任。',
      english: 'Friends should trust each other.',
      words: [
        { character: '朋友', english: 'friends' },
        { character: '之間', english: 'between' },
        { character: '要', english: 'should' },
        { character: '信任', english: 'trust', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '朋友支持我。',
      english: 'My friend supports me.',
      words: [
        { character: '朋友', english: 'friend' },
        { character: '支持', english: 'support', isVocab: true },
        { character: '我', english: 'me' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '做人要誠實。',
      english: 'One should be honest.',
      words: [
        { character: '做人', english: 'being a person' },
        { character: '要', english: 'should' },
        { character: '誠實', english: 'honest', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我難過的時候，朋友安慰我。',
      english: 'When I am sad, friends comfort me.',
      words: [
        { character: '我', english: 'I' },
        { character: '難過', english: 'sad', isVocab: true },
        { character: '的時候', english: 'when' },
        { character: '，', english: '', isPunctuation: true },
        { character: '朋友', english: 'friends' },
        { character: '安慰', english: 'comfort', isVocab: true },
        { character: '我', english: 'me' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我們約好星期六見面。',
      english: 'We arranged to meet on Saturday.',
      words: [
        { character: '我們', english: 'we' },
        { character: '約', english: 'arrange', isVocab: true },
        { character: '好', english: 'agreed' },
        { character: '星期六', english: 'Saturday' },
        { character: '見面', english: 'meet' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '要珍惜友誼。',
      english: 'Cherish friendship.',
      words: [
        { character: '要', english: 'should' },
        { character: '珍惜', english: 'cherish', isVocab: true },
        { character: '友誼', english: 'friendship' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '真正的朋友',
      english: 'True Friends',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '好', english: 'good' },
        { character: '朋友', english: 'friends' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'we' },
        { character: '互相', english: 'each other' },
        { character: '信任', english: 'trust', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '難過', english: 'sad', isVocab: true },
        { character: '時', english: 'when' },
        { character: '互相', english: 'each other' },
        { character: '安慰', english: 'comfort', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '珍惜', english: 'cherish', isVocab: true },
        { character: '友誼', english: 'friendship' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 信任 mean?',
      options: ['distrust', 'trust', 'hate', 'fear'],
      correctAnswer: 'trust',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 珍惜 mean?',
      options: ['waste', 'cherish', 'forget', 'ignore'],
      correctAnswer: 'cherish',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'comfort'?",
      options: ['難過', '安慰', '信任', '約'],
      correctAnswer: '安慰',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '信任', english: 'trust' },
        { chinese: '支持', english: 'support' },
        { chinese: '誠實', english: 'honest' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '難過 means:',
      options: ['happy', 'sad', 'angry', 'excited'],
      correctAnswer: 'sad',
    },
  ],
};

export default lesson;
