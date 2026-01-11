import { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Lesson } from '../../data/types';
import { AnnotationToggle } from './AnnotationToggle';
import { StoryText } from './StoryText';
import { AudioPlayer } from '../shared/AudioPlayer';
import { useAppStore } from '../../store/useAppStore';

interface OutletContext {
  lesson: Lesson;
}

export function StorySection() {
  const { lesson } = useOutletContext<OutletContext>();
  const markStoryRead = useAppStore((state) => state.markStoryRead);
  const hasMarked = useRef(false);

  const [showJyutping, setShowJyutping] = useState(true);
  const [showPinyin, setShowPinyin] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);

  useEffect(() => {
    if (!hasMarked.current) {
      hasMarked.current = true;
      markStoryRead(lesson.id);
    }
  }, [lesson.id, markStoryRead]);

  return (
    <div>
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-display font-bold text-white mb-2">
          Story <span className="chinese-text text-accent-purple">故事</span>
        </h2>
        <p className="text-gray-400">
          Read a short story using the vocabulary you learned.
        </p>
      </motion.div>

      <AnnotationToggle
        showJyutping={showJyutping}
        showPinyin={showPinyin}
        showEnglish={showEnglish}
        onToggleJyutping={() => setShowJyutping(!showJyutping)}
        onTogglePinyin={() => setShowPinyin(!showPinyin)}
        onToggleEnglish={() => setShowEnglish(!showEnglish)}
      />

      <motion.div
        className="bg-dark-card rounded-2xl p-6 md:p-8 border-2 border-dark-hover mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-3xl chinese-text text-white font-bold">
              {lesson.story.title.chinese}
            </h3>
            <p className="text-lg text-gray-400 font-display">
              {lesson.story.title.english}
            </p>
          </div>
          <AudioPlayer src={lesson.story.audioFile} size="lg" />
        </div>

        <div className="border-t border-dark-hover pt-6">
          <StoryText
            paragraphs={lesson.story.content}
            showJyutping={showJyutping}
            showPinyin={showPinyin}
            showEnglish={showEnglish}
          />
        </div>

        <div className="mt-6 pt-6 border-t border-dark-hover">
          <p className="text-sm text-gray-500">
            Tip: Try turning off all annotations and reading the story on your own!
            Words in <span className="text-accent-blue">blue</span> are vocabulary
            from this lesson.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
