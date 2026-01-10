import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Lesson } from '../../data/types';
import { SentenceCard } from './SentenceCard';

interface OutletContext {
  lesson: Lesson;
}

export function SentencesSection() {
  const { lesson } = useOutletContext<OutletContext>();

  return (
    <div>
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-display font-bold text-white mb-2">
          Sentences <span className="chinese-text text-accent-green">句子</span>
        </h2>
        <p className="text-gray-400">
          Practice reading {lesson.sentences.length} sentences using the vocabulary.
        </p>
      </motion.div>

      <div className="space-y-4">
        {lesson.sentences.map((sentence, index) => (
          <SentenceCard
            key={sentence.id}
            sentence={sentence}
            lessonId={lesson.id}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
