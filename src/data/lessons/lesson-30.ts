import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-30',
  theme: 'clothes-2',
  icon: '👕',
  title: {
    chinese: '穿衣服（二）',
    english: 'Getting Dressed (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '外套', english: 'jacket, coat' },
    { id: 'vocab-02', character: '裙', english: 'skirt' },
    { id: 'vocab-03', character: '帽', english: 'hat' },
    { id: 'vocab-04', character: '襪', english: 'socks' },
    { id: 'vocab-05', character: '黃', english: 'yellow' },
    { id: 'vocab-06', character: '白', english: 'white' },
    { id: 'vocab-07', character: '黑', english: 'black' },
    { id: 'vocab-08', character: '脫', english: 'take off' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '天冷，穿外套。',
      english: "It's cold, wear a jacket.",
      words: [
        { character: '天', english: 'weather' },
        { character: '冷', english: 'cold' },
        { character: '，', english: '', isPunctuation: true },
        { character: '穿', english: 'wear' },
        { character: '外套', english: 'jacket', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '姐姐穿黃色裙。',
      english: 'Sister wears a yellow skirt.',
      words: [
        { character: '姐姐', english: 'sister' },
        { character: '穿', english: 'wears' },
        { character: '黃', english: 'yellow', isVocab: true },
        { character: '色', english: 'color' },
        { character: '裙', english: 'skirt', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '戴帽出去。',
      english: 'Wear a hat to go out.',
      words: [
        { character: '戴', english: 'wear' },
        { character: '帽', english: 'hat', isVocab: true },
        { character: '出去', english: 'go out' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '白襪和黑鞋。',
      english: 'White socks and black shoes.',
      words: [
        { character: '白', english: 'white', isVocab: true },
        { character: '襪', english: 'socks', isVocab: true },
        { character: '和', english: 'and' },
        { character: '黑', english: 'black', isVocab: true },
        { character: '鞋', english: 'shoes' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '回家後脫鞋。',
      english: 'Take off shoes after coming home.',
      words: [
        { character: '回家', english: 'come home' },
        { character: '後', english: 'after' },
        { character: '脫', english: 'take off', isVocab: true },
        { character: '鞋', english: 'shoes' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '這件衣服太大了。',
      english: 'This piece of clothing is too big.',
      words: [
        { character: '這', english: 'this' },
        { character: '件', english: 'piece' },
        { character: '衣服', english: 'clothing' },
        { character: '太', english: 'too' },
        { character: '大', english: 'big' },
        { character: '了', english: '(emphasis)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '穿衣服',
      english: 'Getting Dressed',
    },
    content: [
      [
        { character: '今天', english: 'today' },
        { character: '天', english: 'weather' },
        { character: '冷', english: 'cold' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '穿', english: 'wear' },
        { character: '外套', english: 'jacket', isVocab: true },
        { character: '和', english: 'and' },
        { character: '帽', english: 'hat', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '白', english: 'white', isVocab: true },
        { character: '襪', english: 'socks', isVocab: true },
        { character: '黑', english: 'black', isVocab: true },
        { character: '鞋', english: 'shoes' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '好', english: 'so' },
        { character: '暖', english: 'warm' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 外套 mean?',
      options: ['shirt', 'jacket', 'pants', 'dress'],
      correctAnswer: 'jacket',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 黃 mean?',
      options: ['red', 'blue', 'yellow', 'green'],
      correctAnswer: 'yellow',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'take off'?",
      options: ['穿', '脫', '戴', '買'],
      correctAnswer: '脫',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the colors:',
      pairs: [
        { chinese: '黃', english: 'yellow' },
        { chinese: '白', english: 'white' },
        { chinese: '黑', english: 'black' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '襪 means:',
      options: ['gloves', 'socks', 'shoes', 'belt'],
      correctAnswer: 'socks',
    },
  ],
};

export default lesson;
