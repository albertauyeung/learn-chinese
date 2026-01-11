import { useState, useCallback, useRef, useEffect } from 'react';
import { Howl } from 'howler';

interface UseAudioOptions {
  onEnd?: () => void;
  onError?: (error: unknown) => void;
}

interface UseAudioReturn {
  play: () => void;
  pause: () => void;
  stop: () => void;
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
}

export function useAudio(src: string | undefined, options: UseAudioOptions = {}): UseAudioReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const soundRef = useRef<Howl | null>(null);

  // Initialize or update the Howl instance when src changes
  useEffect(() => {
    if (!src) {
      soundRef.current = null;
      return;
    }

    const sound = new Howl({
      src: [src],
      html5: true,
      preload: true,
      onload: () => {
        setIsLoading(false);
        setError(null);
      },
      onloaderror: (_id, err) => {
        setIsLoading(false);
        setError(`Failed to load audio: ${err}`);
        options.onError?.(err);
      },
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onstop: () => {
        setIsPlaying(false);
      },
      onend: () => {
        setIsPlaying(false);
        options.onEnd?.();
      },
      onplayerror: (_id, err) => {
        setIsPlaying(false);
        setError(`Failed to play audio: ${err}`);
        options.onError?.(err);
      },
    });

    soundRef.current = sound;
    setIsLoading(true);

    return () => {
      sound.unload();
    };
  }, [src, options.onEnd, options.onError]);

  const play = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }, []);

  const pause = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.pause();
    }
  }, []);

  const stop = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
  }, []);

  return {
    play,
    pause,
    stop,
    isPlaying,
    isLoading,
    error,
  };
}
