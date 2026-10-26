import { useCallback } from 'react';
import TICK_SOUND_URI from '@/lib/tickSound';

let context: AudioContext | null = null;
let bufferPromise: Promise<AudioBuffer> | null = null;

// the AudioContext is created on the first click, so browsers never treat it as autoplay
function loadBuffer(audio: AudioContext): Promise<AudioBuffer> {
  bufferPromise ??= fetch(TICK_SOUND_URI)
    .then(response => response.arrayBuffer())
    .then(data => audio.decodeAudioData(data));
  return bufferPromise;
}

export default function useClickSound(volume = 0.35): () => void {
  return useCallback(() => {
    context ??= new AudioContext();
    const audio = context;
    loadBuffer(audio)
      .then(buffer => {
        if (audio.state === 'suspended') audio.resume().catch(() => {});
        const source = audio.createBufferSource();
        const gain = audio.createGain();
        source.buffer = buffer;
        gain.gain.value = volume;
        source.connect(gain).connect(audio.destination);
        source.start();
      })
      // the click sound is decoration; a browser without Web Audio just stays quiet
      .catch(() => {});
  }, [volume]);
}
