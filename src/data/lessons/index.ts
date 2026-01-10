import lesson01 from './lesson-01-at-home';
import type { Lesson } from '../types';

export const lessons: Lesson[] = [lesson01];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

export function getAllLessons(): Lesson[] {
  return lessons;
}
