import { useState } from 'react';
import { motion } from 'framer-motion';
import type { MultipleChoiceQuestion as MCQuestionType } from '../../data/types';

interface MultipleChoiceQuestionProps {
  question: MCQuestionType;
  onAnswer: (isCorrect: boolean) => void;
}

export function MultipleChoiceQuestion({
  question,
  onAnswer,
}: MultipleChoiceQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelect = (option: string) => {
    if (hasAnswered) return;

    setSelectedAnswer(option);
    setHasAnswered(true);

    const isCorrect = option === question.correctAnswer;

    // Delay moving to next question so user can see feedback
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setHasAnswered(false);
    }, 1200);
  };

  const getOptionStyle = (option: string) => {
    if (!hasAnswered) {
      return 'bg-dark-hover hover:bg-dark-card hover:border-accent-blue border-dark-hover';
    }

    if (option === question.correctAnswer) {
      return 'bg-accent-green/20 border-accent-green';
    }

    if (option === selectedAnswer && option !== question.correctAnswer) {
      return 'bg-accent-pink/20 border-accent-pink';
    }

    return 'bg-dark-hover border-dark-hover opacity-50';
  };

  return (
    <div>
      <h3 className="text-2xl font-display font-bold text-white mb-6">
        {question.question}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleSelect(option)}
            className={`
              p-4 rounded-xl border-2 text-left transition-colors
              ${getOptionStyle(option)}
              ${hasAnswered ? 'cursor-default' : 'cursor-pointer'}
            `}
            whileHover={!hasAnswered ? { scale: 1.02 } : {}}
            whileTap={!hasAnswered ? { scale: 0.98 } : {}}
            disabled={hasAnswered}
          >
            <span className="text-lg chinese-text text-white">{option}</span>
          </motion.button>
        ))}
      </div>

      {hasAnswered && (
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {selectedAnswer === question.correctAnswer ? (
            <span className="text-2xl text-accent-green font-bold">Correct!</span>
          ) : (
            <span className="text-2xl text-accent-pink font-bold">
              Incorrect. The answer is: {question.correctAnswer}
            </span>
          )}
        </motion.div>
      )}
    </div>
  );
}
