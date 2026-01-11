import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-60',
  theme: 'hobbies-3',
  icon: '🎨',
  title: {
    chinese: '我的興趣（三）',
    english: 'My Hobbies (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '發展', english: 'develop' },
    { id: 'vocab-02', character: '才能', english: 'talent' },
    { id: 'vocab-03', character: '表演', english: 'perform' },
    { id: 'vocab-04', character: '創作', english: 'create' },
    { id: 'vocab-05', character: '專注', english: 'concentrate' },
    { id: 'vocab-06', character: '熱情', english: 'passion' },
    { id: 'vocab-07', character: '投入', english: 'dedicate' },
    { id: 'vocab-08', character: '夢想', english: 'dream' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '發展自己的興趣。',
      english: 'Develop your own interests.',
      words: [
        { character: '發展', english: 'develop', isVocab: true },
        { character: '自己的', english: 'your own' },
        { character: '興趣', english: 'interests' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '每個人都有才能。',
      english: 'Everyone has talents.',
      words: [
        { character: '每個人', english: 'everyone' },
        { character: '都', english: 'all' },
        { character: '有', english: 'have' },
        { character: '才能', english: 'talent', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我喜歡表演。',
      english: 'I like performing.',
      words: [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '表演', english: 'performing', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '創作需要專注。',
      english: 'Creating needs concentration.',
      words: [
        { character: '創作', english: 'creating', isVocab: true },
        { character: '需要', english: 'needs' },
        { character: '專注', english: 'concentration', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '對興趣要有熱情。',
      english: 'Have passion for your hobbies.',
      words: [
        { character: '對', english: 'for' },
        { character: '興趣', english: 'hobbies' },
        { character: '要', english: 'should' },
        { character: '有', english: 'have' },
        { character: '熱情', english: 'passion', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '追求自己的夢想。',
      english: 'Pursue your dreams.',
      words: [
        { character: '追求', english: 'pursue' },
        { character: '自己的', english: 'your own' },
        { character: '夢想', english: 'dreams', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '追夢',
      english: 'Chasing Dreams',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '夢想', english: 'dream', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '發展', english: 'develop', isVocab: true },
        { character: '我的', english: 'my' },
        { character: '才能', english: 'talent', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '專注', english: 'concentrate', isVocab: true },
        { character: '和', english: 'and' },
        { character: '熱情', english: 'passion', isVocab: true },
        { character: '很', english: 'very' },
        { character: '重要', english: 'important' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '夢想', english: 'dream', isVocab: true },
        { character: '會', english: 'will' },
        { character: '實現', english: 'come true' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 夢想 mean?',
      options: ['hobby', 'talent', 'dream', 'skill'],
      correctAnswer: 'dream',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 熱情 mean?',
      options: ['cold', 'passion', 'tired', 'bored'],
      correctAnswer: 'passion',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'talent'?",
      options: ['夢想', '才能', '發展', '創作'],
      correctAnswer: '才能',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '發展', english: 'develop' },
        { chinese: '表演', english: 'perform' },
        { chinese: '創作', english: 'create' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '專注 means:',
      options: ['distracted', 'concentrate', 'lazy', 'happy'],
      correctAnswer: 'concentrate',
    },
  ],
};

export default lesson;
