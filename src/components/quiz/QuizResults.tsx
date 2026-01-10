import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

interface QuizResultsProps {
  score: number;
  total: number;
  onRetry: () => void;
}

export function QuizResults({ score, total, onRetry }: QuizResultsProps) {
  const { lessonId } = useParams();
  const [showConfetti, setShowConfetti] = useState(false);
  const percentage = Math.round((score / total) * 100);
  const isGreatScore = percentage >= 70;

  useEffect(() => {
    if (isGreatScore) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isGreatScore]);

  const getMessage = () => {
    if (percentage === 100) return 'Perfect! Amazing job!';
    if (percentage >= 80) return 'Great work! Keep it up!';
    if (percentage >= 60) return 'Good effort! Practice more!';
    return "Don't give up! Try again!";
  };

  const getEmoji = () => {
    if (percentage === 100) return '🎉';
    if (percentage >= 80) return '🌟';
    if (percentage >= 60) return '👍';
    return '💪';
  };

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Confetti animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: ['#7aa2f7', '#9ece6a', '#bb9af7', '#ff9e64', '#f7768e'][
                  i % 5
                ],
                left: `${Math.random() * 100}%`,
              }}
              initial={{ y: -20, opacity: 1 }}
              animate={{
                y: window.innerHeight + 20,
                rotate: Math.random() * 360,
                opacity: 0,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}

      <motion.span
        className="text-8xl block mb-6"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: 2 }}
      >
        {getEmoji()}
      </motion.span>

      <h2 className="text-4xl font-display font-bold text-white mb-4">
        Quiz Complete!
      </h2>

      <div className="bg-dark-card rounded-2xl p-8 mb-8 inline-block">
        <p className="text-6xl font-bold text-accent-orange mb-2">
          {score} / {total}
        </p>
        <p className="text-xl text-gray-400">{percentage}%</p>
      </div>

      <p className="text-2xl text-white mb-8">{getMessage()}</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <motion.button
          onClick={onRetry}
          className="px-8 py-4 bg-accent-orange text-dark-bg font-bold rounded-xl text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try Again
        </motion.button>

        <Link to={`/lesson/${lessonId}/vocabulary`}>
          <motion.button
            className="px-8 py-4 bg-dark-hover text-white font-bold rounded-xl text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Review Vocabulary
          </motion.button>
        </Link>

        <Link to="/">
          <motion.button
            className="px-8 py-4 bg-dark-hover text-white font-bold rounded-xl text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Lessons
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
