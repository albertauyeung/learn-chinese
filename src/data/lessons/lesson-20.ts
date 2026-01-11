import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-20',
  theme: 'hobbies-1',
  icon: '🎨',
  title: {
    chinese: '我的興趣（一）',
    english: 'My Hobbies (1)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '興趣', english: 'hobby, interest' },
    { id: 'vocab-02', character: '畫畫', english: 'draw, paint' },
    { id: 'vocab-03', character: '唱歌', english: 'sing' },
    { id: 'vocab-04', character: '跳舞', english: 'dance' },
    { id: 'vocab-05', character: '看書', english: 'read books' },
    { id: 'vocab-06', character: '聽', english: 'listen' },
    { id: 'vocab-07', character: '音樂', english: 'music' },
    { id: 'vocab-08', character: '最', english: 'most' },
    { id: 'vocab-09', character: '玩遊戲', english: 'play games' },
    { id: 'vocab-10', character: '彈琴', english: 'play piano' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '我的興趣是畫畫。',
      english: 'My hobby is drawing.',
      words: [
        { character: '我的', english: 'my' },
        { character: '興趣', english: 'hobby', isVocab: true },
        { character: '是', english: 'is' },
        { character: '畫畫', english: 'drawing', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '我喜歡唱歌。',
      english: 'I like singing.',
      words: [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '唱歌', english: 'sing', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '姐姐會跳舞。',
      english: 'Older sister can dance.',
      words: [
        { character: '姐姐', english: 'older sister' },
        { character: '會', english: 'can' },
        { character: '跳舞', english: 'dance', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我聽音樂。',
      english: 'I listen to music.',
      words: [
        { character: '我', english: 'I' },
        { character: '聽', english: 'listen', isVocab: true },
        { character: '音樂', english: 'music', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '弟弟最喜歡看書。',
      english: 'Younger brother likes reading books most.',
      words: [
        { character: '弟弟', english: 'younger brother' },
        { character: '最', english: 'most', isVocab: true },
        { character: '喜歡', english: 'like' },
        { character: '看書', english: 'read books', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '你有什麼興趣？',
      english: 'What hobbies do you have?',
      words: [
        { character: '你', english: 'you' },
        { character: '有', english: 'have' },
        { character: '什麼', english: 'what' },
        { character: '興趣', english: 'hobby', isVocab: true },
        { character: '？', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-07',
      chinese: '我喜歡玩遊戲。',
      english: 'I like playing games.',
      words: [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '玩遊戲', english: 'play games', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-08',
      chinese: '妹妹學彈琴。',
      english: 'Younger sister learns to play piano.',
      words: [
        { character: '妹妹', english: 'younger sister' },
        { character: '學', english: 'learn' },
        { character: '彈琴', english: 'play piano', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '我的興趣',
      english: 'My Hobbies',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '好多', english: 'many' },
        { character: '興趣', english: 'hobbies', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '喜歡', english: 'like' },
        { character: '畫畫', english: 'draw', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '也', english: 'also' },
        { character: '喜歡', english: 'like' },
        { character: '聽', english: 'listen', isVocab: true },
        { character: '音樂', english: 'music', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '興趣', english: 'hobbies', isVocab: true },
        { character: '好', english: 'very' },
        { character: '好玩', english: 'fun' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 興趣 mean?',
      options: ['work', 'hobby', 'school', 'home'],
      correctAnswer: 1,
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 畫畫 mean?',
      options: ['sing', 'dance', 'draw', 'read'],
      correctAnswer: 2,
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'music'?",
      options: ['唱歌', '跳舞', '音樂', '畫畫'],
      correctAnswer: 2,
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the hobbies:',
      pairs: [
        { chinese: '畫畫', english: 'draw' },
        { chinese: '唱歌', english: 'sing' },
        { chinese: '跳舞', english: 'dance' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '聽音樂 means:',
      options: ['play music', 'listen to music', 'make music', 'like music'],
      correctAnswer: 1,
    },
    {
      id: 'q6',
      type: 'multiple-choice',
      question: 'What does 玩遊戲 mean?',
      options: ['watch movies', 'play games', 'do homework', 'go shopping'],
      correctAnswer: 1,
    },
    {
      id: 'q7',
      type: 'multiple-choice',
      question: "Which word means 'play piano'?",
      options: ['唱歌', '彈琴', '跳舞', '畫畫'],
      correctAnswer: 1,
    },
    {
      id: 'q8',
      type: 'multiple-choice',
      question: '我的興趣是畫畫 means:',
      options: ['I like to draw', 'My hobby is drawing', 'I can draw', 'Drawing is fun'],
      correctAnswer: 1,
    },
  ],
};

export default lesson;
