import type { AnnotatedWord } from '../../data/types';
import { getJyutping, getPinyin } from '../../utils/romanization';

interface StoryWordProps {
  word: AnnotatedWord;
  showJyutping: boolean;
  showPinyin: boolean;
  showEnglish: boolean;
}

export function StoryWord({
  word,
  showJyutping,
  showPinyin,
  showEnglish,
}: StoryWordProps) {
  if (word.isPunctuation) {
    return <span className="chinese-text text-2xl text-gray-400">{word.character}</span>;
  }

  const jyutping = getJyutping(word.character);
  const pinyinText = getPinyin(word.character);
  const hasAnnotations = showJyutping || showPinyin || showEnglish;

  return (
    <span className="inline-flex flex-col items-center mx-0.5 mb-2">
      {/* Annotations above */}
      {hasAnnotations && (
        <span className="flex flex-col items-center text-lg leading-snug mb-1">
          {showJyutping && (
            <span className="text-accent-orange">{jyutping}</span>
          )}
          {showPinyin && (
            <span className="text-accent-purple">{pinyinText}</span>
          )}
          {showEnglish && (
            <span className="text-accent-green">{word.english}</span>
          )}
        </span>
      )}

      {/* Chinese character */}
      <span
        className={`
          chinese-text text-2xl transition-colors
          ${word.isVocab ? 'text-accent-blue font-semibold' : 'text-white'}
        `}
      >
        {word.character}
      </span>
    </span>
  );
}
