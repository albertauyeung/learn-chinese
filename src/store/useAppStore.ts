import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { LessonProgress, QuizScore } from '../data/types';

interface AppState {
  // Progress tracking
  progress: Record<string, LessonProgress>;

  // Actions
  markVocabularyViewed: (lessonId: string, vocabularyId: string) => void;
  markSentenceViewed: (lessonId: string, sentenceId: string) => void;
  markStoryRead: (lessonId: string) => void;
  saveQuizScore: (lessonId: string, score: number, total: number) => void;
  getProgress: (lessonId: string) => LessonProgress;
  resetProgress: (lessonId: string) => void;
  resetAllProgress: () => void;
}

const createEmptyProgress = (lessonId: string): LessonProgress => ({
  lessonId,
  viewedVocabulary: [],
  viewedSentences: [],
  storyRead: false,
  quizScores: [],
});

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      progress: {},

      markVocabularyViewed: (lessonId: string, vocabularyId: string) => {
        set((state) => {
          const currentProgress = state.progress[lessonId] || createEmptyProgress(lessonId);
          if (currentProgress.viewedVocabulary.includes(vocabularyId)) {
            return state;
          }
          return {
            progress: {
              ...state.progress,
              [lessonId]: {
                ...currentProgress,
                viewedVocabulary: [...currentProgress.viewedVocabulary, vocabularyId],
              },
            },
          };
        });
      },

      markSentenceViewed: (lessonId: string, sentenceId: string) => {
        set((state) => {
          const currentProgress = state.progress[lessonId] || createEmptyProgress(lessonId);
          if (currentProgress.viewedSentences.includes(sentenceId)) {
            return state;
          }
          return {
            progress: {
              ...state.progress,
              [lessonId]: {
                ...currentProgress,
                viewedSentences: [...currentProgress.viewedSentences, sentenceId],
              },
            },
          };
        });
      },

      markStoryRead: (lessonId: string) => {
        set((state) => {
          const currentProgress = state.progress[lessonId] || createEmptyProgress(lessonId);
          return {
            progress: {
              ...state.progress,
              [lessonId]: {
                ...currentProgress,
                storyRead: true,
              },
            },
          };
        });
      },

      saveQuizScore: (lessonId: string, score: number, total: number) => {
        set((state) => {
          const currentProgress = state.progress[lessonId] || createEmptyProgress(lessonId);
          const newScore: QuizScore = {
            date: new Date().toISOString(),
            score,
            total,
          };
          return {
            progress: {
              ...state.progress,
              [lessonId]: {
                ...currentProgress,
                quizScores: [...currentProgress.quizScores, newScore],
              },
            },
          };
        });
      },

      getProgress: (lessonId: string) => {
        const progress = get().progress[lessonId];
        return progress || createEmptyProgress(lessonId);
      },

      resetProgress: (lessonId: string) => {
        set((state) => ({
          progress: {
            ...state.progress,
            [lessonId]: createEmptyProgress(lessonId),
          },
        }));
      },

      resetAllProgress: () => {
        set({ progress: {} });
      },
    }),
    {
      name: 'learn-chinese-progress',
    }
  )
);
