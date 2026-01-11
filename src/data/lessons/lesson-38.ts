import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-38',
  theme: 'transport-2',
  icon: '🚌',
  title: {
    chinese: '交通（二）',
    english: 'Transportation (2)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '的士', english: 'taxi' },
    { id: 'vocab-02', character: '飛機', english: 'airplane' },
    { id: 'vocab-03', character: '火車', english: 'train' },
    { id: 'vocab-04', character: '站', english: 'station, stop' },
    { id: 'vocab-05', character: '落', english: 'get off' },
    { id: 'vocab-06', character: '上', english: 'get on' },
    { id: 'vocab-07', character: '轉', english: 'transfer' },
    { id: 'vocab-08', character: '塞車', english: 'traffic jam' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我們坐的士去。',
      english: 'We take a taxi there.',
      words: [
        { character: '我們', english: 'we' },
        { character: '坐', english: 'take' },
        { character: '的士', english: 'taxi', isVocab: true },
        { character: '去', english: 'go' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '飛機飛得好高。',
      english: 'Airplanes fly very high.',
      words: [
        { character: '飛機', english: 'airplane', isVocab: true },
        { character: '飛', english: 'fly' },
        { character: '得', english: '(complement marker)' },
        { character: '好', english: 'very' },
        { character: '高', english: 'high' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '在這站落車。',
      english: 'Get off at this stop.',
      words: [
        { character: '在', english: 'at' },
        { character: '這', english: 'this' },
        { character: '站', english: 'stop', isVocab: true },
        { character: '落', english: 'get off', isVocab: true },
        { character: '車', english: 'vehicle' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '上車請付錢。',
      english: 'Please pay when getting on.',
      words: [
        { character: '上', english: 'get on', isVocab: true },
        { character: '車', english: 'vehicle' },
        { character: '請', english: 'please' },
        { character: '付錢', english: 'pay' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '要轉火車。',
      english: 'Need to transfer to a train.',
      words: [
        { character: '要', english: 'need to' },
        { character: '轉', english: 'transfer', isVocab: true },
        { character: '火車', english: 'train', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '塞車了，遲到了。',
      english: 'Traffic jam, late.',
      words: [
        { character: '塞車', english: 'traffic jam', isVocab: true },
        { character: '了', english: '(change of state)' },
        { character: '，', english: '', isPunctuation: true },
        { character: '遲到', english: 'late' },
        { character: '了', english: '(change of state)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '坐飛機',
      english: 'Taking an Airplane',
    },
    content: [
      [
        { character: '今天', english: 'today' },
        { character: '我', english: 'I' },
        { character: '坐', english: 'take' },
        { character: '飛機', english: 'airplane', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '先', english: 'first' },
        { character: '坐', english: 'take' },
        { character: '的士', english: 'taxi', isVocab: true },
        { character: '去', english: 'go' },
        { character: '機場', english: 'airport' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '飛機', english: 'airplane', isVocab: true },
        { character: '飛', english: 'fly' },
        { character: '得', english: '(complement marker)' },
        { character: '好', english: 'very' },
        { character: '高', english: 'high' },
        { character: '！', english: '', isPunctuation: true },
      ],
      [
        { character: '好', english: 'so' },
        { character: '開心', english: 'happy' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 的士 mean?',
      options: ['bus', 'taxi', 'train', 'tram'],
      correctAnswer: 'taxi',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 飛機 mean?',
      options: ['helicopter', 'airplane', 'rocket', 'bird'],
      correctAnswer: 'airplane',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'get off'?",
      options: ['上', '落', '轉', '站'],
      correctAnswer: '落',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the transport:',
      pairs: [
        { chinese: '的士', english: 'taxi' },
        { chinese: '飛機', english: 'airplane' },
        { chinese: '火車', english: 'train' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '塞車 means:',
      options: ['car park', 'traffic jam', 'broken car', 'fast car'],
      correctAnswer: 'traffic jam',
    },
  ],
};

export default lesson;
