import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-14',
  theme: 'festivals-1',
  icon: '🎊',
  title: {
    chinese: '節日（一）',
    english: 'Festivals (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '新年', english: 'New Year' },
    { id: 'vocab-02', character: '恭喜', english: 'congratulations' },
    { id: 'vocab-03', character: '紅包', english: 'red packet' },
    { id: 'vocab-04', character: '快樂', english: 'happy' },
    { id: 'vocab-05', character: '節日', english: 'festival' },
    { id: 'vocab-06', character: '慶祝', english: 'celebrate' },
    { id: 'vocab-07', character: '禮物', english: 'gift' },
    { id: 'vocab-08', character: '發', english: 'give out' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '新年快樂！',
      english: 'Happy New Year!',
      words: [
        { character: '新年', english: 'New Year', isVocab: true },
        { character: '快樂', english: 'happy', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '恭喜發財！',
      english: 'Wishing you prosperity!',
      words: [
        { character: '恭喜', english: 'congratulations', isVocab: true },
        { character: '發', english: 'give out', isVocab: true },
        { character: '財', english: 'wealth' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '我收到紅包。',
      english: 'I received a red packet.',
      words: [
        { character: '我', english: 'I' },
        { character: '收到', english: 'received' },
        { character: '紅包', english: 'red packet', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我們慶祝節日。',
      english: 'We celebrate the festival.',
      words: [
        { character: '我們', english: 'we' },
        { character: '慶祝', english: 'celebrate', isVocab: true },
        { character: '節日', english: 'festival', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '這是給你的禮物。',
      english: 'This is a gift for you.',
      words: [
        { character: '這', english: 'this' },
        { character: '是', english: 'is' },
        { character: '給', english: 'for' },
        { character: '你的', english: 'your' },
        { character: '禮物', english: 'gift', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '節日好開心！',
      english: 'Festivals are so fun!',
      words: [
        { character: '節日', english: 'festival', isVocab: true },
        { character: '好', english: 'so' },
        { character: '開心', english: 'happy' },
        { character: '！', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '過新年',
      english: 'Celebrating New Year',
    },
    content: [
      [
        { character: '新年', english: 'New Year', isVocab: true },
        { character: '到', english: 'arrive' },
        { character: '了', english: '(change of state)' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '恭喜', english: 'congratulations', isVocab: true },
        { character: '恭喜', english: 'congratulations', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '收到', english: 'received' },
        { character: '紅包', english: 'red packet', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '新年', english: 'New Year', isVocab: true },
        { character: '快樂', english: 'happy', isVocab: true },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 新年 mean?',
      options: ['birthday', 'New Year', 'festival', 'holiday'],
      correctAnswer: 'New Year',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What is 紅包?',
      options: ['red bag', 'red packet', 'gift box', 'candy'],
      correctAnswer: 'red packet',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'happy'?",
      options: ['新年', '恭喜', '快樂', '節日'],
      correctAnswer: '快樂',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '新年', english: 'New Year' },
        { chinese: '紅包', english: 'red packet' },
        { chinese: '禮物', english: 'gift' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '新年快樂 means:',
      options: ['Merry Christmas', 'Happy Birthday', 'Happy New Year', 'Good luck'],
      correctAnswer: 'Happy New Year',
    },
  ],
};

export default lesson;
