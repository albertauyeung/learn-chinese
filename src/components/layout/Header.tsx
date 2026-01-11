import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="bg-dark-card border-b border-dark-hover sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Link to="/" className="flex items-center gap-3 w-fit">
          <motion.span
            className="text-4xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            📚
          </motion.span>
          <div>
            <h1 className="text-xl md:text-2xl font-display font-bold text-white">
              Learn Chinese
            </h1>
            <p className="text-sm text-accent-blue chinese-text">學中文</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
