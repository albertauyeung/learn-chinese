import { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Lesson, QuizQuestion } from '../../data/types';
import { QuizProgress } from './QuizProgress';
import { MultipleChoiceQuestion } from './MultipleChoiceQuestion';
import { MatchingQuestion } from './MatchingQuestion';
import { ListeningQuestion } from './ListeningQuestion';
import { QuizResults } from './QuizResults';
import { useAppStore } from '../../store/useAppStore';

interface OutletContext {
  lesson: Lesson;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function QuizSection() {
  const { lesson } = useOutletContext<OutletContext>();
  const saveQuizScore = useAppStore((state) => state.saveQuizScore);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [key, setKey] = useState(0); // For resetting

  const questions = useMemo(
    () => shuffleArray(lesson.quiz),
    [lesson.quiz, key]
  );

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Quiz complete
      const finalScore = isCorrect ? score + 1 : score;
      saveQuizScore(lesson.id, finalScore, questions.length);
      setIsComplete(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsComplete(false);
    setKey((prev) => prev + 1); // Re-shuffle questions
  };

  const renderQuestion = (question: QuizQuestion) => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <MultipleChoiceQuestion
            key={question.id}
            question={question}
            onAnswer={handleAnswer}
          />
        );
      case 'matching':
        return (
          <MatchingQuestion
            key={question.id}
            question={question}
            onAnswer={handleAnswer}
          />
        );
      case 'listening':
        return (
          <ListeningQuestion
            key={question.id}
            question={question}
            onAnswer={handleAnswer}
          />
        );
      default:
        return null;
    }
  };

  if (isComplete) {
    return <QuizResults score={score} total={questions.length} onRetry={handleRetry} />;
  }

  return (
    <div>
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-display font-bold text-white mb-2">
          Quiz <span className="chinese-text text-accent-orange">測驗</span>
        </h2>
        <p className="text-gray-400">Test your knowledge of this lesson!</p>
      </motion.div>

      <QuizProgress current={currentIndex} total={questions.length} />

      <motion.div
        className="bg-dark-card rounded-2xl p-6 md:p-8 border-2 border-dark-hover"
        key={currentQuestion.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderQuestion(currentQuestion)}
      </motion.div>
    </div>
  );
}
