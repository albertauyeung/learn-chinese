import { useParams, Outlet, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getLessonById } from '../data/lessons';
import { TabNavigation } from '../components/lesson/TabNavigation';

export function LessonPage() {
  const { lessonId } = useParams();
  const lesson = lessonId ? getLessonById(lessonId) : undefined;

  if (!lesson) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
        >
          <span>←</span>
          <span>Back to Lessons</span>
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-5xl">{lesson.icon}</span>
          <div>
            <h1 className="text-4xl font-bold chinese-text text-white">
              {lesson.title.chinese}
            </h1>
            <p className="text-xl text-gray-400 font-display">{lesson.title.english}</p>
          </div>
        </div>
      </motion.div>

      <TabNavigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Outlet context={{ lesson }} />
      </motion.div>
    </div>
  );
}
