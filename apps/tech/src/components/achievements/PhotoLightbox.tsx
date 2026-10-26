import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

export interface LightboxPhoto {
  src: string;
  caption: string;
}

export interface PhotoLightboxProps {
  photo: LightboxPhoto | null;
  onClose: () => void;
}

// the native <dialog> moves focus in, closes on Escape and returns focus to the photo that opened it
export default function PhotoLightbox({ photo, onClose }: PhotoLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (photo && !dialog.open) dialog.showModal();
    if (!photo && dialog.open) dialog.close();
  }, [photo]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      aria-label={photo ? photo.caption : 'Photo'}
      className="m-auto max-h-none max-w-none bg-transparent p-4 backdrop:bg-[rgb(18_18_18/0.82)]"
    >
      {photo && (
        <motion.figure
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative m-0 bg-[#fffffc] p-3 pb-14 text-[#121212] sm:p-4 sm:pb-16"
        >
          <img
            src={photo.src}
            alt={photo.caption}
            className="mono-img block max-h-[74dvh] w-auto max-w-[min(88vw,1080px)] object-contain"
          />
          <figcaption className="absolute inset-x-4 bottom-4 truncate text-center font-note text-2xl leading-none sm:bottom-5 sm:text-[28px]">
            {photo.caption}
          </figcaption>
          <button
            type="button"
            autoFocus
            onClick={() => dialogRef.current?.close()}
            aria-label="Close photo"
            className="absolute -top-4 -right-4 grid size-10 place-items-center rounded-full border-2 border-[#121212] bg-[#fffffc] shadow-[3px_3px_0_#121212] transition-transform hover:-translate-x-px hover:-translate-y-px"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </motion.figure>
      )}
    </dialog>
  );
}
