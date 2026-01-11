import type { Lesson } from '../types';

const lesson: Lesson = {
  id: 'lesson-42',
  theme: 'family-3',
  icon: '👨‍👩‍👧‍👦',
  title: {
    chinese: '我的家人（三）',
    english: 'My Family (3)',
  },
  vocabulary: [
    { id: 'vocab-01', character: '照顧', english: 'take care of' },
    { id: 'vocab-02', character: '陪', english: 'accompany' },
    { id: 'vocab-03', character: '尊重', english: 'respect' },
    { id: 'vocab-04', character: '感謝', english: 'grateful' },
    { id: 'vocab-05', character: '幸福', english: 'happiness' },
    { id: 'vocab-06', character: '回憶', english: 'memory' },
    { id: 'vocab-07', character: '長大', english: 'grow up' },
    { id: 'vocab-08', character: '相處', english: 'get along' },
  ],
  sentences: [
    {
      id: 'sent-01',
      chinese: '媽媽照顧我們。',
      english: 'Mom takes care of us.',
      words: [
        { character: '媽媽', english: 'mom' },
        { character: '照顧', english: 'take care of', isVocab: true },
        { character: '我們', english: 'us' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-02',
      chinese: '爸爸陪我做功課。',
      english: 'Dad accompanies me doing homework.',
      words: [
        { character: '爸爸', english: 'dad' },
        { character: '陪', english: 'accompany', isVocab: true },
        { character: '我', english: 'me' },
        { character: '做', english: 'do' },
        { character: '功課', english: 'homework' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-03',
      chinese: '要尊重爺爺奶奶。',
      english: 'Should respect grandparents.',
      words: [
        { character: '要', english: 'should' },
        { character: '尊重', english: 'respect', isVocab: true },
        { character: '爺爺', english: 'grandpa' },
        { character: '奶奶', english: 'grandma' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-04',
      chinese: '我感謝我的家人。',
      english: 'I am grateful for my family.',
      words: [
        { character: '我', english: 'I' },
        { character: '感謝', english: 'grateful', isVocab: true },
        { character: '我的', english: 'my' },
        { character: '家人', english: 'family' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-05',
      chinese: '我長大了。',
      english: 'I grew up.',
      words: [
        { character: '我', english: 'I' },
        { character: '長大', english: 'grew up', isVocab: true },
        { character: '了', english: '(completed)' },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
    {
      id: 'sent-06',
      chinese: '家人相處好幸福。',
      english: 'Getting along with family is happiness.',
      words: [
        { character: '家人', english: 'family' },
        { character: '相處', english: 'get along', isVocab: true },
        { character: '好', english: 'very' },
        { character: '幸福', english: 'happiness', isVocab: true },
        { character: '。', english: '', isPunctuation: true },
      ],
    },
  ],
  story: {
    title: {
      chinese: '幸福的家',
      english: 'A Happy Home',
    },
    content: [
      [
        { character: '我', english: 'I' },
        { character: '有', english: 'have' },
        { character: '幸福', english: 'happy', isVocab: true },
        { character: '的', english: "'s" },
        { character: '家', english: 'home' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '爸爸', english: 'dad' },
        { character: '媽媽', english: 'mom' },
        { character: '照顧', english: 'take care of', isVocab: true },
        { character: '我', english: 'me' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我們', english: 'we' },
        { character: '相處', english: 'get along', isVocab: true },
        { character: '得', english: '(complement marker)' },
        { character: '好', english: 'well' },
        { character: '好', english: 'well' },
        { character: '。', english: '', isPunctuation: true },
      ],
      [
        { character: '我', english: 'I' },
        { character: '感謝', english: 'grateful', isVocab: true },
        { character: '我的', english: 'my' },
        { character: '家人', english: 'family' },
        { character: '！', english: '', isPunctuation: true },
      ],
    ],
  },
  quiz: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'What does 照顧 mean?',
      options: ['ignore', 'take care of', 'scold', 'leave'],
      correctAnswer: 'take care of',
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'What does 感謝 mean?',
      options: ['angry', 'sad', 'grateful', 'scared'],
      correctAnswer: 'grateful',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: "Which word means 'grow up'?",
      options: ['相處', '長大', '照顧', '陪'],
      correctAnswer: '長大',
    },
    {
      id: 'q4',
      type: 'matching',
      question: 'Match the words:',
      pairs: [
        { chinese: '照顧', english: 'take care of' },
        { chinese: '尊重', english: 'respect' },
        { chinese: '幸福', english: 'happiness' },
      ],
    },
    {
      id: 'q5',
      type: 'multiple-choice',
      question: '相處 means:',
      options: ['argue', 'get along', 'separate', 'meet'],
      correctAnswer: 'get along',
    },
  ],
};

export default lesson;
