import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-04',
  theme: 'friends-1',
  icon: '👫',
  title: {
    chinese: '我的朋友（一）',
    english: 'My Friends (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '朋友', english: 'friend' },
    { id: 'vocab-02', character: '玩', english: 'play' },
    { id: 'vocab-03', character: '開心', english: 'happy' },
    { id: 'vocab-04', character: '一起', english: 'together' },
    { id: 'vocab-05', character: '笑', english: 'laugh' },
    { id: 'vocab-06', character: '喜歡', english: 'like' },
    { id: 'vocab-07', character: '說', english: 'speak, say' },
    { id: 'vocab-08', character: '話', english: 'words, speech' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '他是我的朋友。',
      english: 'He is my friend.',
      words: [
        { character: '他', english: 'he' },
        { character: '是', english: 'is' },
        { character: '我的', english: 'my' },
        { character: '朋友', english: 'friend', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我們一起玩。',
      english: 'We play together.',
      words: [
        { character: '我們', english: 'we' },
        { character: '一起', english: 'together', isVocab: true },
        { character: '玩', english: 'play', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '朋友好開心。',
      english: 'My friend is so happy.',
      words: [
        { character: '朋友', english: 'friend', isVocab: true },
        { character: '好', english: 'so' },
        { character: '開心', english: 'happy', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我喜歡和朋友玩。',
      english: 'I like playing with friends.',
      words: [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like', isVocab: true },
        { character: '和', english: 'with' },
        { character: '朋友', english: 'friend', isVocab: true },
        { character: '玩', english: 'play', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我們笑哈哈。',
      english: 'We laugh happily.',
      words: [
        { character: '我們', english: 'we' },
        { character: '笑', english: 'laugh', isVocab: true },
        { character: '哈哈', english: 'haha' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '朋友和我說話。',
      english: 'My friend talks with me.',
      words: [
        { character: '朋友', english: 'friend', isVocab: true },
        { character: '和', english: 'with' },
        { character: '我', english: 'me' },
        { character: '說', english: 'speak', isVocab: true },
        { character: '話', english: 'words', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '好朋友',
      english: 'Good Friends',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '朋友', english: 'friend', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'we' },
        { character: '一起', english: 'together', isVocab: true },
        { character: '玩', english: 'play', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'we' },
        { character: '笑', english: 'laugh', isVocab: true },
        { character: '哈哈', english: 'haha' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '好', english: 'very' },
        { character: '開心', english: 'happy', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 朋友 mean?',
      options: ['family', 'friend', 'teacher', 'student'],
      correctAnswer: 'friend',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 開心 mean?',
      options: ['sad', 'angry', 'happy', 'tired'],
      correctAnswer: 'happy',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'play'?",
      options: ['笑', '玩', '說', '喜歡'],
      correctAnswer: '玩',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '朋友', english: 'friend' },
        { chinese: '開心', english: 'happy' },
        { chinese: '一起', english: 'together' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '我們一起玩 means:',
      options: ['I play alone', 'We play together', 'They are friends', 'I like playing'],
      correctAnswer: 'We play together',
    },
  ],
};

export default lesson;
