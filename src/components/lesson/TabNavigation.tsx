import { NavLink, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const tabs = [
  { path: 'vocabulary', label: 'Vocabulary', chinese: '生詞', color: 'accent-blue' },
  { path: 'sentences', label: 'Sentences', chinese: '句子', color: 'accent-green' },
  { path: 'story', label: 'Story', chinese: '故事', color: 'accent-purple' },
  { path: 'quiz', label: 'Quiz', chinese: '測驗', color: 'accent-orange' },
];

export function TabNavigation() {
  const { lessonId } = useParams();

  return (
    <nav className="flex flex-wrap gap-2 mb-8">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={`/lesson/${lessonId}/${tab.path}`}
          className={({ isActive }) =>
            `relative px-6 py-3 rounded-xl font-semibold transition-all ${
              isActive
                ? `bg-${tab.color} text-dark-bg`
                : 'bg-dark-card text-gray-300 hover:bg-dark-hover'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.div
                  className={`absolute inset-0 bg-${tab.color} rounded-xl`}
                  layoutId="activeTab"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span>{tab.label}</span>
                <span className="chinese-text text-sm opacity-80">{tab.chinese}</span>
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
