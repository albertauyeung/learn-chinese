import type { AnnotatedWord as AnnotatedWordType } from '../../data/types';
import { AnnotatedWord } from './AnnotatedWord';

interface WordBreakdownProps {
  words: AnnotatedWordType[];
}

export function WordBreakdown({ words }: WordBreakdownProps) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {words.map((word, index) => (
        <AnnotatedWord key={index} word={word} />
      ))}
    </div>
  );
}
