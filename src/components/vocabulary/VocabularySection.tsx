import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Lesson } from '../../data/types';
import { VocabularyCard } from './VocabularyCard';

interface OutletContext {
  lesson: Lesson;
}

export function VocabularySection() {
  const { lesson } = useOutletContext<OutletContext>();

  return (
    <div>
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-display font-bold text-white mb-2">
          Vocabulary <span className="chinese-text text-accent-blue">生詞</span>
        </h2>
        <p className="text-gray-400">
          Learn {lesson.vocabulary.length} new words for this lesson.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lesson.vocabulary.map((item, index) => (
          <VocabularyCard
            key={item.id}
            item={item}
            lessonId={lesson.id}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
