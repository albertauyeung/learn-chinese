import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { MatchingQuestion as MatchingQuestionType } from '../../data/types';

interface MatchingQuestionProps {
  question: MatchingQuestionType;
  onAnswer: (isCorrect: boolean) => void;
}

interface Match {
  chinese: string;
  english: string;
}

export function MatchingQuestion({ question, onAnswer }: MatchingQuestionProps) {
  const [selectedChinese, setSelectedChinese] = useState<string | null>(null);
  const [matches, setMatches] = useState<Match[]>([]);
  const [shuffledEnglish, setShuffledEnglish] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle English options on mount
    const shuffled = [...question.pairs.map((p) => p.english)].sort(
      () => Math.random() - 0.5
    );
    setShuffledEnglish(shuffled);
  }, [question]);

  const handleChineseClick = (chinese: string) => {
    if (matches.some((m) => m.chinese === chinese)) return;
    setSelectedChinese(chinese);
  };

  const handleEnglishClick = (english: string) => {
    if (!selectedChinese) return;
    if (matches.some((m) => m.english === english)) return;

    const newMatch = { chinese: selectedChinese, english };
    const newMatches = [...matches, newMatch];
    setMatches(newMatches);
    setSelectedChinese(null);

    // Check if all matches are complete
    if (newMatches.length === question.pairs.length) {
      // Calculate score
      const correctCount = newMatches.filter((match) => {
        const pair = question.pairs.find((p) => p.chinese === match.chinese);
        return pair && pair.english === match.english;
      }).length;

      const isAllCorrect = correctCount === question.pairs.length;

      setTimeout(() => {
        onAnswer(isAllCorrect);
        setMatches([]);
        setSelectedChinese(null);
      }, 1200);
    }
  };

  const isChineseMatched = (chinese: string) => matches.some((m) => m.chinese === chinese);
  const isEnglishMatched = (english: string) => matches.some((m) => m.english === english);

  const getMatchStatus = (chinese: string) => {
    const match = matches.find((m) => m.chinese === chinese);
    if (!match) return null;

    const pair = question.pairs.find((p) => p.chinese === chinese);
    return pair && pair.english === match.english ? 'correct' : 'incorrect';
  };

  return (
    <div>
      <h3 className="text-2xl font-display font-bold text-white mb-6">
        {question.question}
      </h3>

      <div className="grid grid-cols-2 gap-8">
        {/* Chinese column */}
        <div className="space-y-3">
          <p className="text-sm text-gray-400 font-semibold mb-2">Chinese</p>
          {question.pairs.map((pair) => {
            const status = getMatchStatus(pair.chinese);
            return (
              <motion.button
                key={pair.chinese}
                onClick={() => handleChineseClick(pair.chinese)}
                className={`
                  w-full p-4 rounded-xl border-2 text-center transition-colors
                  ${
                    selectedChinese === pair.chinese
                      ? 'bg-accent-blue/20 border-accent-blue'
                      : status === 'correct'
                      ? 'bg-accent-green/20 border-accent-green'
                      : status === 'incorrect'
                      ? 'bg-accent-pink/20 border-accent-pink'
                      : isChineseMatched(pair.chinese)
                      ? 'bg-dark-hover border-dark-hover opacity-50'
                      : 'bg-dark-hover hover:bg-dark-card border-dark-hover'
                  }
                `}
                whileHover={!isChineseMatched(pair.chinese) ? { scale: 1.02 } : {}}
                whileTap={!isChineseMatched(pair.chinese) ? { scale: 0.98 } : {}}
                disabled={isChineseMatched(pair.chinese)}
              >
                <span className="text-xl chinese-text text-white">{pair.chinese}</span>
              </motion.button>
            );
          })}
        </div>

        {/* English column */}
        <div className="space-y-3">
          <p className="text-sm text-gray-400 font-semibold mb-2">English</p>
          {shuffledEnglish.map((english) => (
            <motion.button
              key={english}
              onClick={() => handleEnglishClick(english)}
              className={`
                w-full p-4 rounded-xl border-2 text-center transition-colors
                ${
                  isEnglishMatched(english)
                    ? 'bg-dark-hover border-dark-hover opacity-50'
                    : selectedChinese
                    ? 'bg-dark-hover hover:bg-accent-blue/20 hover:border-accent-blue border-dark-hover'
                    : 'bg-dark-hover border-dark-hover'
                }
              `}
              whileHover={!isEnglishMatched(english) && selectedChinese ? { scale: 1.02 } : {}}
              whileTap={!isEnglishMatched(english) && selectedChinese ? { scale: 0.98 } : {}}
              disabled={isEnglishMatched(english) || !selectedChinese}
            >
              <span className="text-lg text-white">{english}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Click a Chinese word, then click its English meaning
      </p>
    </div>
  );
}
