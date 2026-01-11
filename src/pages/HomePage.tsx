import { motion } from 'framer-motion';
import { getAllLessons } from '../data/lessons';
import { LessonCard } from '../components/shared/LessonCard';

export function HomePage() {
  const lessons = getAllLessons();

  return (
    <div>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Choose a Lesson
        </h1>
        <p className="text-xl text-gray-400">
          Start learning Traditional Chinese! 開始學習繁體中文！
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <LessonCard lesson={lesson} />
          </motion.div>
        ))}
      </motion.div>

      {lessons.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-400">No lessons available yet.</p>
        </div>
      )}
    </div>
  );
}
