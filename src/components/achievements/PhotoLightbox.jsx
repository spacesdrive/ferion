import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

export function PhotoLightbox({ photo, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (photo && !dialog.open) dialog.showModal();
    if (!photo && dialog.open) dialog.close();
  }, [photo]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      aria-label={photo ? photo.caption : 'Photo'}
      className="m-auto max-h-none max-w-none bg-transparent p-4 backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      {photo && (
        <motion.figure
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <img
            src={photo.src}
            alt={photo.caption}
            className="max-h-[80dvh] w-auto max-w-[min(92vw,1100px)] rounded-xl object-contain shadow-2xl"
          />
          <figcaption className="mt-3 text-center text-sm text-white/80">{photo.caption}</figcaption>
          <button
            type="button"
            autoFocus
            onClick={() => dialogRef.current.close()}
            aria-label="Close photo"
            className="absolute -top-3 -right-3 grid size-9 place-items-center rounded-full border border-white/15 bg-black/70 text-white transition-colors hover:bg-black"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </motion.figure>
      )}
    </dialog>
  );
}
