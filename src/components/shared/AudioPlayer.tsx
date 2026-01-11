import { motion } from 'framer-motion';
import { useAudio } from '../../hooks/useAudio';

interface AudioPlayerProps {
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AudioPlayer({ src, size = 'md', className = '' }: AudioPlayerProps) {
  const { play, isPlaying, isLoading } = useAudio(src);

  const sizeClasses = {
    sm: 'w-10 h-10 text-xl',
    md: 'w-14 h-14 text-2xl',
    lg: 'w-16 h-16 text-3xl',
  };

  const handleClick = () => {
    if (!isLoading && src) {
      play();
    }
  };

  if (!src) {
    return null;
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`
        ${sizeClasses[size]}
        rounded-full bg-accent-blue hover:bg-accent-blue/80
        flex items-center justify-center
        transition-colors cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      disabled={isLoading}
      aria-label={isPlaying ? 'Playing audio' : 'Play audio'}
    >
      {isLoading ? (
        <motion.div
          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      ) : isPlaying ? (
        <span className="animate-pulse">🔊</span>
      ) : (
        <span>🔈</span>
      )}
    </motion.button>
  );
}
