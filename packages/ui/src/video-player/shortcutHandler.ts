import type { KeyboardEvent } from 'react';

export interface ShortcutActions {
  togglePlay: () => void;
  skip: (seconds: number) => void;
  toggleMute: () => void;
  toggleFullscreen: () => void;
  togglePictureInPicture: () => void;
  toggleCaptions: () => void;
}

// the shortcuts the tooltips promise: Space/K play, J/L skip, M mute, F fullscreen, P picture-in-picture, C captions
export default function shortcutHandler(actions: ShortcutActions) {
  const handlers: Record<string, () => void> = {
    ' ': actions.togglePlay,
    k: actions.togglePlay,
    j: () => actions.skip(-10),
    l: () => actions.skip(10),
    ArrowLeft: () => actions.skip(-5),
    ArrowRight: () => actions.skip(5),
    m: actions.toggleMute,
    f: actions.toggleFullscreen,
    p: actions.togglePictureInPicture,
    c: actions.toggleCaptions,
  };

  return (event: KeyboardEvent<HTMLElement>) => {
    // leave keys alone while a control such as the volume slider or a menu button has focus
    const target = event.target as HTMLElement;
    if (target.closest('input, button, [role="menu"]')) return;
    const handler = handlers[event.key.length === 1 ? event.key.toLowerCase() : event.key];
    if (!handler) return;
    event.preventDefault();
    handler();
  };
}
