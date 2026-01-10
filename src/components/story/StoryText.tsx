import type { AnnotatedWord } from '../../data/types';
import { StoryWord } from './StoryWord';

interface StoryTextProps {
  paragraphs: AnnotatedWord[][];
  showJyutping: boolean;
  showPinyin: boolean;
  showEnglish: boolean;
}

export function StoryText({
  paragraphs,
  showJyutping,
  showPinyin,
  showEnglish,
}: StoryTextProps) {
  return (
    <div className="space-y-6">
      {paragraphs.map((paragraph, pIndex) => (
        <p key={pIndex} className="flex flex-wrap items-end leading-relaxed">
          {paragraph.map((word, wIndex) => (
            <StoryWord
              key={wIndex}
              word={word}
              showJyutping={showJyutping}
              showPinyin={showPinyin}
              showEnglish={showEnglish}
            />
          ))}
        </p>
      ))}
    </div>
  );
}
