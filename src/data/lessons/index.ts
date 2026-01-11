import lesson01 from './lesson-01-at-home';
import lesson02 from './lesson-02-my-family';
import lesson03 from './lesson-03-at-school';
import lesson04 from './lesson-04-playground';
import lesson05 from './lesson-05-dim-sum';
import type { Lesson } from '../types';

export const lessons: Lesson[] = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

export function getAllLessons(): Lesson[] {
  return lessons;
}
