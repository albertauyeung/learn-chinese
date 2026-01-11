import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Lesson } from '../../data/types';
import { useAppStore } from '../../store/useAppStore';

interface LessonCardProps {
  lesson: Lesson;
}

// Stable empty progress object to avoid creating new objects
const emptyProgress = {
  viewedVocabulary: [] as string[],
  viewedSentences: [] as string[],
  storyRead: false,
  quizScores: [] as { date: string; score: number; total: number }[],
};

export function LessonCard({ lesson }: LessonCardProps) {
  // Access progress directly from state to avoid creating new objects
  const progress = useAppStore((state) => state.progress[lesson.id]) || emptyProgress;

  const totalItems =
    lesson.vocabulary.length + lesson.sentences.length + 1 + lesson.quiz.length;
  const completedItems =
    progress.viewedVocabulary.length +
    progress.viewedSentences.length +
    (progress.storyRead ? 1 : 0) +
    (progress.quizScores.length > 0 ? lesson.quiz.length : 0);

  const progressPercent = Math.round((completedItems / totalItems) * 100);

  return (
    <Link to={`/lesson/${lesson.id}`}>
      <motion.div
        className="bg-dark-card rounded-2xl p-6 border-2 border-dark-hover hover:border-accent-blue transition-colors cursor-pointer h-full"
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-start justify-between mb-4">
          <span className="text-5xl">{lesson.icon}</span>
          {progressPercent > 0 && (
            <div className="bg-dark-hover rounded-full px-3 py-1">
              <span className="text-accent-green text-sm font-semibold">
                {progressPercent}%
              </span>
            </div>
          )}
        </div>

        <h3 className="text-3xl font-bold chinese-text text-white mb-2">
          {lesson.title.chinese}
        </h3>
        <p className="text-lg text-gray-300 font-display">{lesson.title.english}</p>

        <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
          <span>{lesson.vocabulary.length} words</span>
          <span>{lesson.sentences.length} sentences</span>
          <span>{lesson.quiz.length} quiz</span>
        </div>

        {/* Progress bar */}
        {progressPercent > 0 && (
          <div className="mt-4 h-2 bg-dark-hover rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-blue to-accent-green"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}
      </motion.div>
    </Link>
  );
}
