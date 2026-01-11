import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AnnotatedWord as AnnotatedWordType } from '../../data/types';
import { getJyutping, getPinyin } from '../../utils/romanization';

interface AnnotatedWordProps {
  word: AnnotatedWordType;
  showAnnotations?: boolean;
}

export function AnnotatedWord({ word, showAnnotations = true }: AnnotatedWordProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (word.isPunctuation) {
    return <span className="chinese-text text-2xl text-gray-400">{word.character}</span>;
  }

  const jyutping = getJyutping(word.character);
  const pinyinText = getPinyin(word.character);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className={`
          chinese-text text-2xl cursor-pointer transition-colors
          ${word.isVocab ? 'text-accent-blue font-semibold' : 'text-white'}
          hover:text-accent-pink
        `}
        whileHover={{ scale: 1.05 }}
      >
        {word.character}
      </motion.span>

      <AnimatePresence>
        {isHovered && showAnnotations && (
          <motion.div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
          >
            <div className="bg-dark-hover rounded-xl px-4 py-3 shadow-lg border border-dark-card min-w-max">
              <div className="text-center space-y-1">
                <p className="text-accent-orange text-sm">{jyutping}</p>
                <p className="text-accent-purple text-sm">{pinyinText}</p>
                <p className="text-white text-sm font-medium">{word.english}</p>
              </div>
              {/* Arrow pointer */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                <div className="border-8 border-transparent border-t-dark-hover"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
