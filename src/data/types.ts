// Core data types for the Learn Chinese app

export interface VocabularyItem {
  id: string;
  character: string;
  english: string;
  audioFile?: string;
}

export interface AnnotatedWord {
  character: string;
  english: string;
  isVocab?: boolean;
  isPunctuation?: boolean;
}

export interface Sentence {
  id: string;
  chinese: string;
  english: string;
  words: AnnotatedWord[];
  audioFile?: string;
}

export interface Story {
  title: {
    chinese: string;
    english: string;
  };
  content: AnnotatedWord[][];  // Array of paragraphs, each containing words
  audioFile?: string;
}

export type QuestionType = 'multiple-choice' | 'matching' | 'listening';

export interface MultipleChoiceQuestion {
  id: string;
  type: 'multiple-choice';
  question: string;
  options: string[];
  correctAnswer: number | string;
  vocabularyId?: string;
}

export interface MatchingQuestion {
  id: string;
  type: 'matching';
  question: string;
  pairs: { chinese: string; english: string }[];
}

export interface ListeningQuestion {
  id: string;
  type: 'listening';
  question: string;
  audioFile: string;
  options: string[];
  correctAnswer: number | string;
  vocabularyId?: string;
}

export type QuizQuestion = MultipleChoiceQuestion | MatchingQuestion | ListeningQuestion;

export interface Lesson {
  id: string;
  theme: string;
  icon: string;
  title: {
    chinese: string;
    english: string;
  };
  vocabulary: VocabularyItem[];
  sentences: Sentence[];
  story: Story;
  quiz: QuizQuestion[];
}

// Progress tracking types
export interface LessonProgress {
  lessonId: string;
  viewedVocabulary: string[];
  viewedSentences: string[];
  storyRead: boolean;
  quizScores: QuizScore[];
}

export interface QuizScore {
  date: string;
  score: number;
  total: number;
}
