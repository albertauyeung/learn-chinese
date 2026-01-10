Learn Traditional Chinese - Web App Implementation Plan

Overview

Create a React-based web app for kids (ages 8-12) to learn traditional Chinese through themed lessons with vocabulary, sentences, and quizzes.
Focus on reading comprehension and character recognition with Cantonese audio support.

Tech Stack

- Frontend: React 18 + TypeScript + Vite
- Routing: React Router v6
- State: Zustand (with localStorage persistence)
- Styling: Tailwind CSS (kid-friendly theme)
- Audio: Howler.js
- Animations: Framer Motion

Implementation Phases

Phase 1: Project Initialization

Goal: Set up development environment and dependencies

1. Initialize Vite project with React + TypeScript template
npm create vite@latest . -- --template react-ts
2. Install core dependencies:
npm install react-router-dom zustand howler framer-motion
npm install to-jyutping pinyin
npm install @google-cloud/text-to-speech
npm install -D tailwindcss postcss autoprefixer @types/howler
npx tailwindcss init -p

2. Key Libraries:
  - to-jyutping - Converts Chinese characters to Jyutping (Cantonese romanization)
  - pinyin - Converts Chinese characters to Pinyin (Mandarin romanization)
  - @google-cloud/text-to-speech - Google Cloud TTS for generating Cantonese audio
3. Configure Tailwind with kid-friendly dark theme:
  - Dark theme with colorful accents for eye protection
  - Dark backgrounds (navy, dark gray) with vibrant accent colors
  - High contrast text for readability
  - Chinese fonts (Noto Sans TC from Google Fonts)
  - Larger base font sizes
  - Playful display fonts (Fredoka, Quicksand)
  - Colorful cards/components against dark background
4. Set up project structure:
src/
├── components/
│   ├── layout/
│   ├── lesson/
│   ├── vocabulary/
│   ├── sentences/
│   ├── story/
│   ├── quiz/
│   └── shared/
├── pages/
├── data/
│   ├── lessons/
│   └── types.ts
├── store/
├── hooks/
└── utils/

Phase 2: Data Model & First Lesson

Goal: Define data structures and create sample content

1. Create TypeScript interfaces in src/data/types.ts:
  - Lesson - Container for entire lesson
  - VocabularyItem - Character, English, audio (jyutping/pinyin auto-generated)
  - Sentence - Full sentence with annotated words
  - AnnotatedWord - Individual word breakdown (character, English, isVocab flag)
  - Story - Short story using lesson vocabulary with annotated text
  - QuizQuestion - Multiple choice, matching, listening types
2. Create first lesson data file src/data/lessons/lesson-01-at-home.ts:
  - Theme: "At Home" (在家裡)
  - 12 vocabulary words (家, 我, 媽媽, 爸爸, 哥哥, 姐姐, 弟弟, 妹妹, 客廳, 房間, 廚房, 浴室)
  - 8 varied sentences with increasing complexity using vocabulary
  - 1 short story (6-8 sentences) using vocabulary from the lesson
  - 7-8 quiz questions covering the content
3. Set up Zustand store src/store/useAppStore.ts:
  - Track lesson progress (vocabulary/sentences viewed)
  - Store quiz scores
  - Persist to localStorage

Phase 3: Core Layout & Navigation

Goal: Build app shell and routing

1. Create Layout components:
  - Layout.tsx - Main wrapper with header/footer
  - Header.tsx - App title and navigation
  - Footer.tsx - Simple footer
2. Set up React Router in App.tsx:
  - / - Home page with lesson grid
  - /lesson/:lessonId - Lesson page with tabs
  - /lesson/:lessonId/vocabulary - Vocabulary section
  - /lesson/:lessonId/sentences - Sentences section
  - /lesson/:lessonId/story - Story section (new!)
  - /lesson/:lessonId/quiz - Quiz section
3. Create HomePage:
  - LessonGrid.tsx - Grid of lesson cards
  - LessonCard.tsx - Card showing theme, icon, title
4. Update TabNavigation:
  - Add "Story" tab between "Sentences" and "Quiz"
  - Tab order: Vocabulary → Sentences → Story → Quiz

Phase 4: Vocabulary Section

Goal: Display vocabulary with audio playback

1. Create useAudio.ts hook:
  - Wrap Howler.js for audio playback
  - Handle loading states
  - Provide play/pause controls
2. Build shared AudioPlayer.tsx component:
  - Speaker icon button
  - Visual feedback (playing state)
  - Accessible with keyboard
3. Create VocabularyCard.tsx:
  - Large Chinese character display (48-72px)
  - Jyutping below character (with tone numbers)
  - Mandarin pinyin (with tone marks)
  - English translation
  - Audio button (prominent, kid-friendly)
  - Card-based layout with Tailwind
4. Create VocabularySection.tsx:
  - Grid layout (responsive: 1-3 columns)
  - Render all vocabulary cards
  - Mark viewed vocabulary in store

Phase 5: Sentences Section

Goal: Display annotated sentences with word breakdowns

1. Create AnnotatedWord.tsx:
  - Display single word/character
  - Show jyutping, pinyin, English on hover/tap
  - Highlight if word is from vocabulary list
  - Responsive tooltip/modal for annotations
2. Create WordBreakdown.tsx:
  - Layout component for sentence words
  - Horizontal flow with clear word separation
  - Each word is AnnotatedWord component
3. Create SentenceCard.tsx:
  - Full sentence in Chinese (large font)
  - WordBreakdown below showing all annotations
  - Sentence audio button
  - Visual separation between sentences
4. Create SentencesSection.tsx:
  - Vertical list of sentence cards
  - Track viewed sentences

Phase 5b: Story Section

Goal: Display engaging story with toggleable annotations

1. Create AnnotationToggle.tsx:
  - Toggle buttons for Jyutping, Pinyin, English
  - Three independent toggles (can enable/disable each)
  - Sticky/fixed position at top of story
  - Store toggle state in component state
2. Create StoryText.tsx:
  - Display full story with word-by-word annotations
  - Each word is an AnnotatedWord with conditional display
  - Respect toggle states (show/hide jyutping/pinyin/English)
  - Paragraph layout for natural reading
  - Audio button for full story
3. Create StorySection.tsx:
  - Container with AnnotationToggle at top
  - StoryText below with toggle state passed down
  - Encourage reading practice with annotations hidden

Phase 6: Quiz Section

Goal: Interactive quizzes to test comprehension

1. Create base quiz components:
  - QuizSection.tsx - Container managing quiz state
  - QuestionCard.tsx - Wrapper for different question types
  - QuizProgress.tsx - Shows current question number
2. Implement question types:
  - MultipleChoiceQuestion.tsx - 4 options, select one
  - MatchingQuestion.tsx - Match characters to English
  - ListeningQuestion.tsx - Play audio, select correct character
3. Create QuizResults.tsx:
  - Show score (e.g., "7 out of 10")
  - List of questions with correct/incorrect indicators
  - "Review Vocabulary" and "Try Again" buttons
  - Confetti animation for high scores (Framer Motion)
4. Implement quiz logic:
  - Shuffle questions
  - Track answers
  - Calculate score
  - Save to Zustand store

Phase 7: Polish & Enhancement

Goal: Add animations, feedback, and refinement

1. Add Framer Motion animations:
  - Page transitions
  - Card entrance animations
  - Correct/incorrect feedback (green checkmark, red X)
  - Quiz result celebration
2. Implement feedback mechanisms:
  - Haptic-like visual feedback on interactions
  - Success sounds for correct answers (optional)
  - Progress indicators showing completion
3. Responsive design refinement:
  - Test on mobile devices
  - Ensure touch targets are 44px minimum
  - Adjust font sizes for small screens
  - Optimize layout for tablets
4. Performance optimization:
  - Lazy load lesson pages
  - Preload lesson audio on page load
  - Optimize audio file sizes (64kbps MP3)

Phase 8: Additional Content

Goal: Create remaining lessons

1. Create lesson data files (following lesson-01 pattern):
  - lesson-02-my-family.ts - 我的家人 (extended family, relationships)
  - lesson-03-at-school.ts - 在學校 (classroom, subjects, school)
  - lesson-04-playground.ts - 遊樂場 (swings, slides, playing)
  - lesson-05-dim-sum.ts - 飲茶 (dim sum dishes)
  - Each lesson includes: vocabulary, sentences, story, quiz
2. Generate audio assets:
  - Recommended approach: Use Google Cloud Text-to-Speech API (yue-HK)
  - Alternative: Use MiniMax TTS, AiVOOV, or other Cantonese TTS services
  - Production upgrade: Replace with human recordings later
3. Audio generation workflow:
  - Create Node.js script scripts/generate-audio.js
  - Read lesson data files
  - For each vocabulary word, sentence, and story:
      - Call TTS API with Chinese text
    - Save MP3 file to public/audio/ with proper naming
  - Naming convention:
      - Vocabulary: vocabulary/lesson-{id}/vocab-{index}.mp3
    - Sentences: sentences/lesson-{id}/sent-{index}.mp3
    - Stories: stories/lesson-{id}/story.mp3
  - Run script once to pre-generate all audio files
  - Commit audio files to repository (or regenerate as needed)
4. Setup for Google Cloud TTS:
  - Install: npm install @google-cloud/text-to-speech
  - Set up Google Cloud project and API key
  - Configure service account credentials
  - Use yue-HK language code for Cantonese
  - Select appropriate voice (e.g., Chirp 3 HD voices)

Critical Files

1. src/data/types.ts

Core TypeScript interfaces defining the entire data model. All components depend on these types.

Key interfaces:
interface Lesson {
  id: string;
  theme: string;
  title: { chinese: string; english: string };
  vocabulary: VocabularyItem[];
  sentences: Sentence[];
  story: Story;
  quiz: QuizQuestion[];
}

interface Story {
  title: { chinese: string; english: string };
  content: AnnotatedWord[];
  audioFile?: string;
}

2. src/data/lessons/lesson-01-at-home.ts

First complete lesson with vocabulary, sentences, and quiz questions. This serves as the template for all other lessons. Only stores Chinese
characters and English - romanizations generated at runtime.

3. src/utils/romanization.ts

Utility functions wrapping to-jyutping and pinyin libraries for consistent romanization conversion throughout the app.

4. src/components/vocabulary/VocabularyCard.tsx

Most important display component showing Chinese characters with jyutping, pinyin, English, and audio. Sets the pattern for Chinese content
display.

5. src/hooks/useAudio.ts

Custom hook wrapping Howler.js for audio playback. Used throughout the app for all audio features.

6. src/store/useAppStore.ts

Zustand store managing lesson progress, quiz scores, and localStorage persistence. Central state management.

7. src/pages/LessonPage.tsx

Main lesson container with tab navigation between vocabulary, sentences, and quiz sections.

8. tailwind.config.js

Custom Tailwind configuration with dark theme, colorful accents, Chinese fonts, and large font sizes.

Color palette example:
colors: {
  dark: {
    bg: '#1a1b26',      // Main background
    card: '#24283b',    // Card background
    hover: '#2d3149',   // Hover state
  },
  accent: {
    blue: '#7aa2f7',    // Vocabulary
    green: '#9ece6a',   // Sentences
    purple: '#bb9af7',  // Story
    orange: '#ff9e64',  // Quiz
    pink: '#f7768e',    // Highlights
  },
}

9. src/components/story/StorySection.tsx

Story display component with toggleable annotations. Allows kids to practice reading by showing/hiding jyutping, pinyin, and English translations
independently.

10. scripts/generate-audio.js

Node.js script to generate Cantonese audio files using Google Cloud Text-to-Speech API. Reads lesson data and creates MP3 files for all
vocabulary, sentences, and stories. Run once during development to populate audio assets.

Design Considerations

Kid-Friendly Dark UI (Ages 8-12)

- Dark theme: Navy/dark gray backgrounds (#1a1b26, #24283b) for eye protection
- Colorful accents:
  - Vocabulary cards: Bright blue (#7aa2f7) accents
  - Sentences cards: Green (#9ece6a) accents
  - Story cards: Purple (#bb9af7) accents
  - Quiz cards: Orange (#ff9e64) accents
- High contrast text: White/light text on dark backgrounds
- Large, clear fonts: 48-72px for Chinese characters, 16-20px for romanization
- Card-based layout: Colorful cards with dark borders, generous spacing
- Big buttons: Minimum 44px touch targets with gradient backgrounds
- Visual feedback: Glow effects, scale animations, encouraging messages
- Progress indicators: Show lesson completion with color gradients

Audio Strategy

- Pre-generated audio files using Text-to-Speech API (recommended)
  - Google Cloud Text-to-Speech with yue-HK (Cantonese Hong Kong)
  - Generate once, save as MP3 files, commit to repository
  - No runtime API calls needed (faster, no API costs during app usage)
- Alternative: Use MiniMax TTS, AiVOOV, or human recordings
- Organize as: public/audio/vocabulary/lesson-{id}/vocab-{index}.mp3
- Use Howler.js for cross-browser compatibility
- Preload audio when lesson page loads
- 64kbps MP3 format (sufficient for speech, smaller files)
- Create scripts/generate-audio.js to automate audio generation from lesson data

Data Organization

- Static TypeScript files for lessons (no backend needed)
- Each lesson is a separate file following consistent structure
- Easy to add new lessons by duplicating and modifying
- Audio file paths referenced in data
- Romanization generated dynamically: Use to-jyutping and pinyin libraries to automatically convert Chinese characters to romanizations at
runtime, eliminating manual entry errors

Verification & Testing

Manual Testing Steps

1. Home page: Verify all lesson cards display with correct themes and icons
2. Vocabulary section:
  - Click each vocabulary card
  - Verify audio plays correctly
  - Check all romanizations display properly
3. Sentences section:
  - Hover/tap on words to see annotations
  - Verify sentence audio plays
  - Check word highlighting for vocabulary items
4. Story section:
  - Toggle jyutping on/off - verify annotations show/hide
  - Toggle pinyin on/off independently
  - Toggle English on/off independently
  - Try all combinations of toggles
  - Verify story audio plays
  - Check that vocabulary words are highlighted
5. Quiz section:
  - Complete entire quiz
  - Verify scoring is correct
  - Check that results are stored (refresh page and check persistence)
6. Navigation: Test all routes and tab switching (including Story tab)
7. Mobile: Test on phone/tablet for responsiveness

Browser Testing

- Chrome (Desktop & Mobile)
- Safari (Desktop & iOS)
- Firefox
- Check audio playback in all browsers

Performance Checks

- Lighthouse score (aim for 90+ performance)
- Audio loading time (should be <2 seconds)
- Page transitions (should be smooth with animations)

Content Verification

- All Chinese characters display correctly (no tofu squares)
- Jyutping tone numbers are correct (1-6)
- Pinyin tone marks render properly (ā, é, ǐ, ò)
- English translations are age-appropriate

Success Criteria

- App loads and displays lesson grid
- User can navigate to any lesson
- Vocabulary cards show all required information
- Audio plays for vocabulary and sentences
- Sentences display with word annotations
- Story section displays with toggleable annotations (jyutping/pinyin/English)
- Toggle controls work independently
- Story audio plays correctly
- Quiz questions are functional and score correctly
- Progress persists across page refreshes
- App is responsive on mobile devices
- UI is colorful and kid-friendly
- All 5 initial lessons are complete with stories and audio

Lesson Topics (First 20 Lessons)

Basic Environment (Lessons 1-5)

1. 在家裡 (At Home) - Family members, rooms, household items
2. 我的家人 (My Family) - Extended family, relationships, family activities
3. 在學校 (At School) - Classroom, subjects, school supplies, teachers
4. 我的朋友 (My Friends) - Friend names, playing together, friendship words
5. 遊樂場 (At the Playground) - Playground equipment, outdoor play, games

Daily Activities (Lessons 6-10)

6. 一天的時間 (Times of Day) - Morning, afternoon, evening, daily routine
7. 吃飯時間 (Mealtime) - Breakfast, lunch, dinner, basic food words
8. 去購物 (Going Shopping) - Store types, buying things, money basics
9. 我的身體 (My Body) - Body parts, feelings, health basics
10. 穿衣服 (Getting Dressed) - Clothing items, colors, weather-appropriate clothing

Food & Culture (Lessons 11-15)

11. 在餐廳 (At the Restaurant) - Ordering food, restaurant manners, utensils
12. 飲茶 (Yam Cha / Dim Sum) - Dim sum dishes, tea culture, family dining
13. 生果同菜 (Fruits and Vegetables) - Healthy foods, market shopping
14. 節日 (Festivals) - Chinese New Year, Mid-Autumn Festival, celebrations
15. 煮飯 (Cooking) - Kitchen tools, simple cooking verbs, helping in kitchen

Activities & Hobbies (Lessons 16-20)

16. 做運動 (Sports and Exercise) - Ball games, swimming, physical activities
17. 動物 (Animals) - Pets, zoo animals, animal sounds
18. 交通 (Transportation) - Car, bus, MTR, ferry, getting around HK
19. 天氣 (Weather) - Sunny, rainy, hot, cold, seasons
20. 我的興趣 (My Hobbies) - Reading, drawing, music, favorite activities

Note: Using written Chinese (書面語) with HK vocabulary preferences where they differ from mainland/Taiwan (e.g., 煮飯 not 做飯 for cooking)

---
Lesson 1: 在家裡 (At Home) - Detailed Content

Vocabulary (12 words)

┌───────────┬─────────────────┬────────────────────────────────────────────┐
│ Character │     English     │                   Notes                    │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 家        │ home            │ Written Chinese (屋企 is spoken Cantonese) │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 我        │ I, me           │ Basic pronoun                              │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 爸爸      │ dad, father     │                                            │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 媽媽      │ mom, mother     │                                            │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 哥哥      │ older brother   │                                            │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 姐姐      │ older sister    │                                            │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 弟弟      │ younger brother │                                            │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 妹妹      │ younger sister  │                                            │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 客廳      │ living room     │ Written Chinese                            │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 房間      │ room, bedroom   │ Written Chinese                            │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 廚房      │ kitchen         │                                            │
├───────────┼─────────────────┼────────────────────────────────────────────┤
│ 浴室      │ bathroom        │ Written Chinese (廁所 also acceptable)     │
└───────────┴─────────────────┴────────────────────────────────────────────┘
Note: Jyutping and Pinyin will be generated automatically using to-jyutping and pinyin libraries.

Sentences (8 sentences with word breakdown)

Note: Using written Chinese (書面語) style with HK vocabulary preferences. Jyutping and Pinyin auto-generated.

Sentence 1: 我和家人住在家裡。
- Audio: sentences/lesson-01/sent-01.mp3
- English: "I live at home with my family."
- Word breakdown:
  - 我 - I [vocab]
  - 和 - and, with
  - 家人 - family
  - 住 - live
  - 在 - at
  - 家裡 - home

Sentence 2: 爸爸和媽媽在客廳看電視。
- Audio: sentences/lesson-01/sent-02.mp3
- English: "Dad and mom are watching TV in the living room."
- Word breakdown:
  - 爸爸 - dad [vocab]
  - 和 - and
  - 媽媽 - mom [vocab]
  - 在 - at
  - 客廳 - living room [vocab]
  - 看 - watch
  - 電視 - television

Sentence 3: 媽媽每天在廚房煮飯。
- Audio: sentences/lesson-01/sent-03.mp3
- English: "Mom cooks in the kitchen every day."
- Word breakdown:
  - 媽媽 - mom [vocab]
  - 每天 - every day
  - 在 - at
  - 廚房 - kitchen [vocab]
  - 煮飯 - cook (HK: 煮飯 not 做飯)

Sentence 4: 哥哥和弟弟在房間做功課。
- Audio: sentences/lesson-01/sent-04.mp3
- English: "Older brother and younger brother are doing homework in the room."
- Word breakdown:
  - 哥哥 - older brother [vocab]
  - 和 - and
  - 弟弟 - younger brother [vocab]
  - 在 - at
  - 房間 - room [vocab]
  - 做 - do
  - 功課 - homework

Sentence 5: 姐姐正在洗澡，她在浴室。
- Audio: sentences/lesson-01/sent-05.mp3
- English: "Older sister is taking a shower, she's in the bathroom."
- Word breakdown:
  - 姐姐 - older sister [vocab]
  - 正在 - (progressive aspect: is doing)
  - 洗澡 - take a shower
  - 她 - she
  - 在 - at
  - 浴室 - bathroom [vocab]

Sentence 6: 妹妹很喜歡在家裡玩。
- Audio: sentences/lesson-01/sent-06.mp3
- English: "Younger sister really likes to play at home."
- Word breakdown:
  - 妹妹 - younger sister [vocab]
  - 很 - very
  - 喜歡 - like
  - 在 - at
  - 家裡 - home
  - 玩 - play

Sentence 7: 我們全家人都住在這個家。
- Audio: sentences/lesson-01/sent-07.mp3
- English: "Our whole family lives in this home."
- Word breakdown:
  - 我們 - we
  - 全家人 - whole family
  - 都 - all
  - 住 - live
  - 在 - at
  - 這個 - this
  - 家 - home [vocab]

Sentence 8: 星期六，爸爸會在客廳和我們玩遊戲。
- Audio: sentences/lesson-01/sent-08.mp3
- English: "On Saturday, dad will play games with us in the living room."
- Word breakdown:
  - 星期六 - Saturday
  - 爸爸 - dad [vocab]
  - 會 - will
  - 在 - at
  - 客廳 - living room [vocab]
  - 和 - and, with
  - 我們 - us
  - 玩 - play
  - 遊戲 - games

Story: 我的家 (My Home)

Title: 我的家 (My Home)

Story Content (6 sentences using lesson vocabulary):

我和家人住在一個很溫暖的家。爸爸每天在客廳看報紙，媽媽在廚房煮飯。哥哥和弟弟一起在房間做功課。姐姐喜歡在浴室唱歌。妹妹最喜歡和我在客廳玩遊戲。我很
喜歡我的家和我的家人。

English Translation:
"I live with my family in a very warm home. Dad reads the newspaper in the living room every day, and mom cooks in the kitchen. Older brother and
younger brother do homework together in the room. Older sister likes to sing in the bathroom. Younger sister likes to play games with me in the
living room the most. I really like my home and my family."

Word Breakdown (for annotation system):
- 我 - I [vocab]
- 和 - and
- 家人 - family
- 住 - live
- 在 - at
- 一個 - one (classifier)
- 很 - very
- 溫暖 - warm
- 的 - possessive marker
- 家 - home [vocab]
- 爸爸 - dad [vocab]
- 每天 - every day
- 客廳 - living room [vocab]
- 看 - read/watch
- 報紙 - newspaper
- 媽媽 - mom [vocab]
- 廚房 - kitchen [vocab]
- 煮飯 - cook
- 哥哥 - older brother [vocab]
- 弟弟 - younger brother [vocab]
- 一起 - together
- 房間 - room [vocab]
- 做 - do
- 功課 - homework
- 姐姐 - older sister [vocab]
- 喜歡 - like
- 浴室 - bathroom [vocab]
- 唱歌 - sing
- 妹妹 - younger sister [vocab]
- 最 - most
- 我的 - my
- 玩 - play
- 遊戲 - games

Audio: stories/lesson-01/story.mp3

Note: Each word will have toggleable jyutping, pinyin, and English annotations that kids can show/hide while reading.

---
Quiz Questions (7 questions)

Question 1: Multiple Choice
- Type: multiple-choice
- Question: "What does 家 mean?"
- Options: ["school", "home", "park", "store"]
- Correct Answer: "home"
- Vocabulary ID: vocab-01

Question 2: Multiple Choice
- Type: multiple-choice
- Question: "Which character means 'kitchen'?"
- Options: ["客廳", "房間", "廚房", "浴室"]
- Correct Answer: "廚房"
- Vocabulary ID: vocab-11

Question 3: Multiple Choice
- Type: multiple-choice
- Question: "What does 爸爸 mean?"
- Options: ["mom", "brother", "dad", "sister"]
- Correct Answer: "dad"
- Vocabulary ID: vocab-03

Question 4: Listening
- Type: listening
- Question: "Listen to the audio. Which character is it?"
- Audio: vocabulary/lesson-01/vocab-02.mp3 (我)
- Options: ["我", "你", "他", "她"]
- Correct Answer: "我"
- Vocabulary ID: vocab-02

Question 5: Multiple Choice
- Type: multiple-choice
- Question: "媽媽在廚房 means:"
- Options: ["Dad is in the kitchen", "Mom is in the living room", "Mom is in the kitchen", "Sister is in the kitchen"]
- Correct Answer: "Mom is in the kitchen"

Question 6: Matching
- Type: matching
- Question: "Match the Chinese character to its English meaning:"
- Pairs:
  - 客廳 → living room
  - 房間 → room
  - 浴室 → bathroom

Question 7: Listening
- Type: listening
- Question: "Listen to the sentence. Where is 姐姐?"
- Audio: sentences/lesson-01/sent-05.mp3 (姐姐正在洗澡，她在浴室)
- Options: ["living room", "kitchen", "bathroom", "bedroom"]
- Correct Answer: "bathroom"

---
Future Enhancements (Out of Scope)

- User accounts and backend storage
- Spaced repetition system
- Flashcard mode
- Writing practice (stroke order)
- Parental dashboard
- Achievement badges
- Multi-language support (simplified Chinese, other languages)
