// browsers reject these requests outside a user gesture or when the feature is off; the button then does nothing
export function toggleFullscreenFor(element: HTMLElement | null): void {
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
    return;
  }
  element?.requestFullscreen().catch(() => {});
}

export async function togglePictureInPictureFor(video: HTMLVideoElement | null): Promise<void> {
  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
      return;
    }
    if (video && document.pictureInPictureEnabled) await video.requestPictureInPicture();
  } catch (error) {
    console.error('Error in togglePictureInPictureFor:', error);
  }
}
