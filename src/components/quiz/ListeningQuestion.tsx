import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ListeningQuestion as ListeningQuestionType } from '../../data/types';
import { AudioPlayer } from '../shared/AudioPlayer';

interface ListeningQuestionProps {
  question: ListeningQuestionType;
  onAnswer: (isCorrect: boolean) => void;
}

export function ListeningQuestion({ question, onAnswer }: ListeningQuestionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Handle both number (index) and string (option value) correctAnswer
  const isCorrectAnswer = (index: number): boolean => {
    if (typeof question.correctAnswer === 'number') {
      return index === question.correctAnswer;
    }
    return question.options[index] === question.correctAnswer;
  };

  const getCorrectAnswerText = (): string => {
    if (typeof question.correctAnswer === 'number') {
      return question.options[question.correctAnswer];
    }
    return question.correctAnswer;
  };

  const handleSelect = (index: number) => {
    if (hasAnswered) return;

    setSelectedIndex(index);
    setHasAnswered(true);

    const isCorrect = isCorrectAnswer(index);

    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedIndex(null);
      setHasAnswered(false);
    }, 1200);
  };

  const getOptionStyle = (index: number) => {
    if (!hasAnswered) {
      return 'bg-dark-hover hover:bg-dark-card hover:border-accent-blue border-dark-hover';
    }

    if (isCorrectAnswer(index)) {
      return 'bg-accent-green/20 border-accent-green';
    }

    if (index === selectedIndex && !isCorrectAnswer(index)) {
      return 'bg-accent-pink/20 border-accent-pink';
    }

    return 'bg-dark-hover border-dark-hover opacity-50';
  };

  return (
    <div>
      <h3 className="text-2xl font-display font-bold text-white mb-4">
        {question.question}
      </h3>

      <div className="flex justify-center mb-6">
        <AudioPlayer src={question.audioFile} size="lg" />
      </div>

      <p className="text-center text-gray-400 mb-6">
        Click the speaker to listen, then select your answer
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleSelect(index)}
            className={`
              p-4 rounded-xl border-2 text-center transition-colors
              ${getOptionStyle(index)}
              ${hasAnswered ? 'cursor-default' : 'cursor-pointer'}
            `}
            whileHover={!hasAnswered ? { scale: 1.02 } : {}}
            whileTap={!hasAnswered ? { scale: 0.98 } : {}}
            disabled={hasAnswered}
          >
            <span className="text-2xl chinese-text text-white">{option}</span>
          </motion.button>
        ))}
      </div>

      {hasAnswered && (
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {selectedIndex !== null && isCorrectAnswer(selectedIndex) ? (
            <span className="text-2xl text-accent-green font-bold">Correct!</span>
          ) : (
            <span className="text-2xl text-accent-pink font-bold">
              Incorrect. The answer is: {getCorrectAnswerText()}
            </span>
          )}
        </motion.div>
      )}
    </div>
  );
}
