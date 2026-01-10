import { motion } from 'framer-motion';

interface AnnotationToggleProps {
  showJyutping: boolean;
  showPinyin: boolean;
  showEnglish: boolean;
  onToggleJyutping: () => void;
  onTogglePinyin: () => void;
  onToggleEnglish: () => void;
}

export function AnnotationToggle({
  showJyutping,
  showPinyin,
  showEnglish,
  onToggleJyutping,
  onTogglePinyin,
  onToggleEnglish,
}: AnnotationToggleProps) {
  const toggles = [
    {
      label: 'Jyutping',
      active: showJyutping,
      onClick: onToggleJyutping,
      color: 'accent-orange',
    },
    {
      label: 'Pinyin',
      active: showPinyin,
      onClick: onTogglePinyin,
      color: 'accent-purple',
    },
    {
      label: 'English',
      active: showEnglish,
      onClick: onToggleEnglish,
      color: 'accent-green',
    },
  ];

  return (
    <div className="sticky top-20 z-10 bg-dark-bg pb-4">
      <div className="bg-dark-card rounded-xl p-4 flex flex-wrap items-center gap-4">
        <span className="text-sm text-gray-400 font-semibold">Show:</span>
        {toggles.map((toggle) => (
          <motion.button
            key={toggle.label}
            onClick={toggle.onClick}
            className={`
              px-4 py-2 rounded-lg font-semibold text-sm transition-colors
              ${
                toggle.active
                  ? `bg-${toggle.color} text-dark-bg`
                  : 'bg-dark-hover text-gray-400 hover:text-white'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {toggle.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
