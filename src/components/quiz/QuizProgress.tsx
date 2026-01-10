import { motion } from 'framer-motion';

interface QuizProgressProps {
  current: number;
  total: number;
}

export function QuizProgress({ current, total }: QuizProgressProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400 font-semibold">
          Question {current + 1} of {total}
        </span>
        <span className="text-sm text-accent-orange font-semibold">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-2 bg-dark-hover rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-orange to-accent-pink"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
