import { useCallback } from 'react';
import { tick001Sound } from '@/lib/tick-001';

let context = null;
let bufferPromise = null;

// The AudioContext is created on the first click so browsers never flag it as autoplay.
function loadBuffer() {
  context ??= new AudioContext();
  bufferPromise ??= fetch(tick001Sound.dataUri)
    .then((response) => response.arrayBuffer())
    .then((data) => context.decodeAudioData(data));
  return bufferPromise;
}

export function useClickSound(volume = 0.35) {
  return useCallback(() => {
    loadBuffer()
      .then((buffer) => {
        if (context.state === 'suspended') context.resume();
        const source = context.createBufferSource();
        const gain = context.createGain();
        source.buffer = buffer;
        gain.gain.value = volume;
        source.connect(gain).connect(context.destination);
        source.start();
      })
      .catch(() => {});
  }, [volume]);
}
