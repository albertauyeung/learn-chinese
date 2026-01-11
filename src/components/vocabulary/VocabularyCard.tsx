import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { VocabularyItem } from '../../data/types';
import { getJyutping, getPinyin } from '../../utils/romanization';
import { AudioPlayer } from '../shared/AudioPlayer';
import { useAppStore } from '../../store/useAppStore';

interface VocabularyCardProps {
  item: VocabularyItem;
  lessonId: string;
  index: number;
}

export function VocabularyCard({ item, lessonId, index }: VocabularyCardProps) {
  const markVocabularyViewed = useAppStore((state) => state.markVocabularyViewed);

  const jyutping = getJyutping(item.character);
  const pinyinText = getPinyin(item.character);

  useEffect(() => {
    // Mark as viewed when the card is rendered
    markVocabularyViewed(lessonId, item.id);
  }, [lessonId, item.id, markVocabularyViewed]);

  return (
    <motion.div
      className="bg-dark-card rounded-2xl p-6 border-2 border-dark-hover hover:border-accent-blue transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-chinese-lg chinese-text text-white font-bold">
          {item.character}
        </span>
        <AudioPlayer src={item.audioFile} size="md" />
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-accent-orange font-semibold uppercase tracking-wide">
            Jyutping
          </span>
          <span className="text-lg text-accent-orange">{jyutping}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-accent-purple font-semibold uppercase tracking-wide">
            Pinyin
          </span>
          <span className="text-lg text-accent-purple">{pinyinText}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-dark-hover">
        <p className="text-xl text-white font-display">{item.english}</p>
      </div>
    </motion.div>
  );
}
