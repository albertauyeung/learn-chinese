import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/HomePage';
import { LessonPage } from './pages/LessonPage';
import { VocabularySection } from './components/vocabulary';
import { SentencesSection } from './components/sentences';
import { StorySection } from './components/story';
import { QuizSection } from './components/quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />}>
            <Route index element={<Navigate to="vocabulary" replace />} />
            <Route path="vocabulary" element={<VocabularySection />} />
            <Route path="sentences" element={<SentencesSection />} />
            <Route path="story" element={<StorySection />} />
            <Route path="quiz" element={<QuizSection />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
