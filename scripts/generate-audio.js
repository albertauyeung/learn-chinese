/**
 * Audio Generation Script for Learn Chinese App
 *
 * This script generates Cantonese audio files for all lessons using Google Cloud Text-to-Speech API.
 *
 * Prerequisites:
 * 1. Install Google Cloud SDK: https://cloud.google.com/sdk/docs/install
 * 2. Set up a Google Cloud project with Text-to-Speech API enabled
 * 3. Create a service account and download the JSON key file
 * 4. Set GOOGLE_APPLICATION_CREDENTIALS environment variable to the key file path:
 *    export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your-key-file.json"
 *
 * Usage:
 *   node scripts/generate-audio.js
 *
 * The script will create audio files in:
 *   public/audio/vocabulary/lesson-{id}/vocab-{index}.mp3
 *   public/audio/sentences/lesson-{id}/sent-{index}.mp3
 *   public/audio/stories/lesson-{id}/story.mp3
 */

import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import lessons - we need to compile TypeScript first or use dynamic import
// For simplicity, we'll define the lesson data inline or read from JSON

const client = new textToSpeech.TextToSpeechClient();

const VOICE_CONFIG = {
  languageCode: 'yue-HK', // Cantonese (Hong Kong)
  name: 'yue-HK-Standard-A', // Female voice
  // Alternative voices: 'yue-HK-Standard-B' (Male), 'yue-HK-Standard-C' (Female), 'yue-HK-Standard-D' (Male)
};

const AUDIO_CONFIG = {
  audioEncoding: 'MP3',
  speakingRate: 0.9, // Slightly slower for learners
  pitch: 0,
};

async function synthesizeSpeech(text, outputPath) {
  const request = {
    input: { text },
    voice: VOICE_CONFIG,
    audioConfig: AUDIO_CONFIG,
  };

  try {
    const [response] = await client.synthesizeSpeech(request);

    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, response.audioContent, 'binary');
    console.log(`✓ Generated: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Failed to generate ${outputPath}:`, error.message);
  }
}

// Lesson data - extracted from TypeScript files
const lessons = [
  {
    id: 'lesson-01',
    vocabulary: [
      '家', '我', '爸爸', '媽媽', '哥哥', '姐姐',
      '弟弟', '妹妹', '客廳', '房間', '廚房', '浴室'
    ],
    sentences: [
      '我和家人住在家裡。',
      '爸爸和媽媽在客廳看電視。',
      '媽媽每天在廚房煮飯。',
      '哥哥和弟弟在房間做功課。',
      '姐姐正在洗澡，她在浴室。',
      '妹妹很喜歡在家裡玩。',
      '我們全家人都住在這個家。',
      '星期六，爸爸會在客廳和我們玩遊戲。'
    ],
    story: '我和家人住在一個很溫暖的家。爸爸每天在客廳看報紙，媽媽在廚房煮飯。哥哥和弟弟一起在房間做功課。姐姐喜歡在浴室唱歌。妹妹最喜歡和我在客廳玩遊戲。我很喜歡我的家和我的家人。'
  },
  {
    id: 'lesson-02',
    vocabulary: [
      '爺爺', '嫲嫲', '外公', '外婆', '叔叔', '姑姐',
      '舅父', '姨媽', '表哥', '表姐', '堂弟', '愛'
    ],
    sentences: [
      '我的家人很多。',
      '爺爺和嫲嫲住在香港。',
      '外公和外婆喜歡煮飯給我們吃。',
      '叔叔是爸爸的弟弟。',
      '姨媽每個星期都來我們家。',
      '表哥和表姐比我大。',
      '堂弟喜歡和我一起玩。',
      '我很愛我的家人。'
    ],
    story: '農曆新年的時候，我們全家都會一起吃飯。爺爺和嫲嫲坐在最重要的位置。外公和外婆帶了很多好吃的食物。叔叔、姑姐、舅父和姨媽都來了。表哥、表姐和堂弟一起玩遊戲。我很愛我的家人，新年真開心！'
  },
  {
    id: 'lesson-03',
    vocabulary: [
      '學校', '老師', '同學', '課室', '書', '筆',
      '桌子', '椅子', '黑板', '功課', '考試', '小息'
    ],
    sentences: [
      '我每天都去學校上課。',
      '老師在課室教我們中文。',
      '我的同學很友善。',
      '書和筆放在桌子上。',
      '老師在黑板上寫字。',
      '我坐在椅子上聽老師講課。',
      '小息的時候我們去操場玩。',
      '明天有考試，我要做功課。'
    ],
    story: '我很喜歡去學校。每天早上，我和同學一起上課。老師很好，在黑板上寫很多字。我用筆在書上寫字。小息的時候，我們在操場玩遊戲。放學後，我回家做功課。'
  },
  {
    id: 'lesson-04',
    vocabulary: [
      '遊樂場', '鞦韆', '滑梯', '跑', '跳', '爬',
      '球', '朋友', '開心', '一起', '小心', '休息'
    ],
    sentences: [
      '我喜歡去遊樂場玩。',
      '妹妹在玩鞦韆。',
      '弟弟從滑梯滑下來。',
      '我們一起跑和跳。',
      '哥哥爬上架子。',
      '我和朋友一起踢球。',
      '玩的時候要小心。',
      '玩累了就休息一下。'
    ],
    story: '今天下午，媽媽帶我們去遊樂場。妹妹很開心，她去玩鞦韆。弟弟喜歡滑梯，他滑了很多次。我和朋友一起跑和跳。我們還一起踢球。媽媽說要小心，玩累了要休息。今天真開心！'
  },
  {
    id: 'lesson-05',
    vocabulary: [
      '飲茶', '茶樓', '點心', '蝦餃', '燒賣', '叉燒包',
      '腸粉', '蛋撻', '茶', '好吃', '飽', '筷子'
    ],
    sentences: [
      '星期日我們去飲茶。',
      '茶樓裡有很多點心。',
      '我最喜歡吃蝦餃。',
      '爸爸喜歡燒賣和叉燒包。',
      '媽媽點了腸粉。',
      '我們用筷子吃點心。',
      '蛋撻很好吃！',
      '我吃得很飽，喝了很多茶。'
    ],
    story: '今天是星期日，我們全家去茶樓飲茶。茶樓裡面有很多點心。我吃了蝦餃和燒賣，很好吃！弟弟喜歡叉燒包，他吃了兩個。媽媽幫我們倒茶，我們用筷子吃腸粉。最後，我們吃了蛋撻，好好吃！我吃得很飽，飲茶真開心！'
  }
];

async function generateAllAudio() {
  console.log('🎙️  Starting audio generation...\n');

  const publicDir = path.join(__dirname, '..', 'public', 'audio');

  for (const lesson of lessons) {
    console.log(`\n📚 Processing ${lesson.id}...\n`);

    // Generate vocabulary audio
    for (let i = 0; i < lesson.vocabulary.length; i++) {
      const word = lesson.vocabulary[i];
      const outputPath = path.join(
        publicDir,
        'vocabulary',
        lesson.id,
        `vocab-${String(i + 1).padStart(2, '0')}.mp3`
      );
      await synthesizeSpeech(word, outputPath);
    }

    // Generate sentence audio
    for (let i = 0; i < lesson.sentences.length; i++) {
      const sentence = lesson.sentences[i];
      const outputPath = path.join(
        publicDir,
        'sentences',
        lesson.id,
        `sent-${String(i + 1).padStart(2, '0')}.mp3`
      );
      await synthesizeSpeech(sentence, outputPath);
    }

    // Generate story audio
    const storyOutputPath = path.join(
      publicDir,
      'stories',
      lesson.id,
      'story.mp3'
    );
    await synthesizeSpeech(lesson.story, storyOutputPath);
  }

  console.log('\n✅ Audio generation complete!');
}

// Check if Google Cloud credentials are set
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.error('❌ Error: GOOGLE_APPLICATION_CREDENTIALS environment variable is not set.');
  console.error('');
  console.error('To use this script, you need to:');
  console.error('1. Create a Google Cloud project and enable the Text-to-Speech API');
  console.error('2. Create a service account and download the JSON key file');
  console.error('3. Set the environment variable:');
  console.error('   export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your-key-file.json"');
  console.error('');
  console.error('See: https://cloud.google.com/text-to-speech/docs/quickstart-client-libraries');
  process.exit(1);
}

generateAllAudio().catch(console.error);
