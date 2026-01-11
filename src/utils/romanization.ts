import ToJyutping from 'to-jyutping';
import { pinyin } from 'pinyin';

/**
 * Convert Chinese characters to Jyutping (Cantonese romanization)
 * @param text Chinese text to convert
 * @returns Jyutping romanization with tone numbers
 */
export function toJyutping(text: string): string {
  try {
    const result = ToJyutping.getJyutpingList(text);
    if (!result) return text;

    return result
      .map(([char, jyutping]) => jyutping || char)
      .join(' ')
      .trim();
  } catch {
    return text;
  }
}

/**
 * Convert Chinese characters to Pinyin (Mandarin romanization)
 * @param text Chinese text to convert
 * @returns Pinyin with tone marks
 */
export function toPinyin(text: string): string {
  try {
    const result = pinyin(text, {
      style: 'tone',
      heteronym: false,
    });

    return result.map((p: string[]) => p[0]).join(' ');
  } catch {
    return text;
  }
}

/**
 * Get Jyutping for a single character or word
 * @param char Chinese character(s)
 * @returns Jyutping string
 */
export function getJyutping(char: string): string {
  return toJyutping(char);
}

/**
 * Get Pinyin for a single character or word
 * @param char Chinese character(s)
 * @returns Pinyin string with tone marks
 */
export function getPinyin(char: string): string {
  return toPinyin(char);
}

/**
 * Check if a character is punctuation
 * @param char Character to check
 * @returns true if punctuation
 */
export function isPunctuation(char: string): boolean {
  const punctuation = /^[，。！？、；：""''（）《》【】…\s,.!?;:'"\-\(\)\[\]]+$/;
  return punctuation.test(char);
}
