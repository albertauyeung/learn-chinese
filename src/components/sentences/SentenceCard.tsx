import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Sentence } from '../../data/types';
import { WordBreakdown } from './WordBreakdown';
import { AudioPlayer } from '../shared/AudioPlayer';
import { useAppStore } from '../../store/useAppStore';

interface SentenceCardProps {
  sentence: Sentence;
  lessonId: string;
  index: number;
}

export function SentenceCard({ sentence, lessonId, index }: SentenceCardProps) {
  const markSentenceViewed = useAppStore((state) => state.markSentenceViewed);
  const hasMarked = useRef(false);

  useEffect(() => {
    if (!hasMarked.current) {
      hasMarked.current = true;
      markSentenceViewed(lessonId, sentence.id);
    }
  }, [lessonId, sentence.id, markSentenceViewed]);

  return (
    <motion.div
      className="bg-dark-card rounded-2xl p-6 border-2 border-dark-hover hover:border-accent-green transition-colors"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <p className="text-3xl chinese-text text-white leading-relaxed mb-2">
            {sentence.chinese}
          </p>
          <p className="text-lg text-gray-400 font-display">{sentence.english}</p>
        </div>
        <AudioPlayer src={sentence.audioFile} size="md" />
      </div>

      <div className="pt-4 border-t border-dark-hover">
        <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">
          Word Breakdown (hover to see details)
        </p>
        <WordBreakdown words={sentence.words} />
      </div>
    </motion.div>
  );
}
