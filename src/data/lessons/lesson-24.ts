import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-24',
  theme: 'friends-2',
  icon: '👫',
  title: {
    chinese: '我的朋友（二）',
    english: 'My Friends (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '最好', english: 'best' },
    { id: 'vocab-02', character: '認識', english: 'know, meet' },
    { id: 'vocab-03', character: '幫助', english: 'help' },
    { id: 'vocab-04', character: '分享', english: 'share' },
    { id: 'vocab-05', character: '秘密', english: 'secret' },
    { id: 'vocab-06', character: '吵架', english: 'argue, quarrel' },
    { id: 'vocab-07', character: '原諒', english: 'forgive' },
    { id: 'vocab-08', character: '友誼', english: 'friendship' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '他是我最好的朋友。',
      english: 'He is my best friend.',
      words: [
        { character: '他', english: 'he' },
        { character: '是', english: 'is' },
        { character: '我', english: 'my' },
        { character: '最好', english: 'best', isVocab: true },
        { character: '的', english: "'s" },
        { character: '朋友', english: 'friend' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我們在學校認識。',
      english: 'We met at school.',
      words: [
        { character: '我們', english: 'we' },
        { character: '在', english: 'at' },
        { character: '學校', english: 'school' },
        { character: '認識', english: 'met', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '朋友要互相幫助。',
      english: 'Friends should help each other.',
      words: [
        { character: '朋友', english: 'friends' },
        { character: '要', english: 'should' },
        { character: '互相', english: 'each other' },
        { character: '幫助', english: 'help', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我和他分享食物。',
      english: 'I share food with him.',
      words: [
        { character: '我', english: 'I' },
        { character: '和', english: 'with' },
        { character: '他', english: 'him' },
        { character: '分享', english: 'share', isVocab: true },
        { character: '食物', english: 'food' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '對不起，請原諒我。',
      english: 'Sorry, please forgive me.',
      words: [
        { character: '對不起', english: 'sorry' },
        { character: '，', english: '', isPunctuation: true },
        { character: '請', english: 'please' },
        { character: '原諒', english: 'forgive', isVocab: true },
        { character: '我', english: 'me' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '友誼很重要。',
      english: 'Friendship is very important.',
      words: [
        { character: '友誼', english: 'friendship', isVocab: true },
        { character: '很', english: 'very' },
        { character: '重要', english: 'important' },
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
        { character: '小明', english: 'Xiao Ming' },
        { character: '是', english: 'is' },
        { character: '我', english: 'my' },
        { character: '最好', english: 'best', isVocab: true },
        { character: '的', english: "'s" },
        { character: '朋友', english: 'friend' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'we' },
        { character: '互相', english: 'each other' },
        { character: '幫助', english: 'help', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'we' },
        { character: '分享', english: 'share', isVocab: true },
        { character: '很多', english: 'many' },
        { character: '東西', english: 'things' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '友誼', english: 'friendship', isVocab: true },
        { character: '很', english: 'very' },
        { character: '重要', english: 'important' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 最好 mean?',
      options: ['worst', 'best', 'good', 'bad'],
      correctAnswer: 'best',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 幫助 mean?',
      options: ['hurt', 'help', 'hate', 'hide'],
      correctAnswer: 'help',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'share'?",
      options: ['分享', '認識', '原諒', '吵架'],
      correctAnswer: '分享',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '幫助', english: 'help' },
        { chinese: '分享', english: 'share' },
        { chinese: '原諒', english: 'forgive' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '友誼 means:',
      options: ['enemy', 'friendship', 'family', 'stranger'],
      correctAnswer: 'friendship',
    },
  ],
};

export default lesson;
