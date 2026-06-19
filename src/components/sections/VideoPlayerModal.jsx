import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, Download, Play, Pause, Volume2, VolumeX,
  Maximize2, RotateCcw, RotateCw,
} from 'lucide-react';

// ─── helpers ────────────────────────────────────────────────────────────────

function formatTime(s) {
  if (!s || isNaN(s)) return '00:00';
  return `${Math.floor(s / 60).toString().padStart(2, '0')}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
}

function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([^?&#\s]+)/,
    /[?&]v=([^&#\s]+)/,
    /youtube\.com\/embed\/([^?&#\s]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

// ─── platform badge config ───────────────────────────────────────────────────

const PLATFORM_CONFIG = {
  'Premiere Pro':    { color: '#9999ff', bg: 'rgba(50,35,110,0.9)',  border: 'rgba(153,153,255,0.3)' },
  'DaVinci Resolve': { color: '#c4b5fd', bg: 'rgba(30,15,65,0.9)',   border: 'rgba(196,181,253,0.3)' },
  'CapCut':          { color: '#e2e8f0', bg: 'rgba(20,20,22,0.9)',   border: 'rgba(226,232,240,0.2)' },
  'Final Cut Pro':   { color: '#5eead4', bg: 'rgba(10,40,35,0.9)',   border: 'rgba(94,234,212,0.3)'  },
  'After Effects':   { color: '#93c5fd', bg: 'rgba(20,20,80,0.9)',   border: 'rgba(147,197,253,0.3)' },
};
const DEFAULT_PLATFORM = { color: '#94a3b8', bg: 'rgba(30,30,30,0.9)', border: 'rgba(148,163,184,0.2)' };

// ─── YouTube iframe player ───────────────────────────────────────────────────

function YouTubePlayer({ videoId, title }) {
  return (
    <div
      className="relative w-full bg-black"
      style={{ paddingTop: '56.25%', borderRadius: '0.5rem', clipPath: 'inset(0 round 0.5rem)' }}
    >
      <iframe
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

// ─── custom direct-file player ───────────────────────────────────────────────

function DirectVideoPlayer({ url }) {
  const videoRef    = useRef(null);
  const scrubberRef = useRef(null);
  const containerRef = useRef(null);
  const hideTimer   = useRef(null);

  const [playing, setPlaying]           = useState(false);
  const [currentTime, setCurrentTime]   = useState(0);
  const [duration, setDuration]         = useState(0);
  const [volume, setVolume]             = useState(1);
  const [muted, setMuted]               = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play() : v.pause();
  }, []);

  const skip = useCallback((sec) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(v.duration || 0, v.currentTime + sec));
  }, []);

  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 2500);
  }, []);

  const handleScrubberClick = (e) => {
    const rect = scrubberRef.current?.getBoundingClientRect();
    if (!rect || !videoRef.current || !duration) return;
    videoRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = volume;
    v.muted  = muted;
    const onTime  = () => setCurrentTime(v.currentTime);
    const onMeta  = () => setDuration(v.duration);
    const onPlay  = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('loadedmetadata', onMeta);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('loadedmetadata', onMeta);
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const iconBtn = (onClick, children) => (
    <button
      onClick={onClick}
      className="flex items-center justify-center text-white/60 hover:text-white transition-colors p-1"
    >
      {children}
    </button>
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={resetHideTimer}
      onMouseLeave={() => { clearTimeout(hideTimer.current); setShowControls(false); }}
      className="relative w-full bg-black"
      style={{ aspectRatio: '16/9', borderRadius: '0.5rem', clipPath: 'inset(0 round 0.5rem)' }}
    >
      <video
        ref={videoRef}
        src={url}
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer block"
        preload="metadata"
      />

      {/* vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)' }}
      />

      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-3 left-0 right-0 mx-auto flex flex-col gap-2"
            style={{
              width: 'calc(100% - 1.5rem)',
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.75rem',
              padding: '0.6rem 1rem',
            }}
          >
            {/* scrubber */}
            <div
              ref={scrubberRef}
              onClick={handleScrubberClick}
              className="relative cursor-pointer group/scrub"
              style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.15)' }}
            >
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${progress}%`, background: '#7c3aed', borderRadius: 2, transition: 'width 0.1s linear' }} />
              <div style={{ position: 'absolute', top: '50%', left: `${progress}%`, transform: 'translate(-50%,-50%)', width: 12, height: 12, borderRadius: '50%', background: '#fff', boxShadow: '0 0 0 2px #7c3aed', transition: 'left 0.1s linear' }} />
            </div>

            {/* controls row */}
            <div className="flex items-center justify-between gap-2">
              {/* left: time */}
              <span className="text-white/50 text-[11px] font-mono shrink-0">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              {/* center: skip-back / play / skip-forward */}
              <div className="flex items-center gap-2">
                {iconBtn(() => skip(-10), <RotateCcw size={15} />)}
                <motion.button
                  onClick={togglePlay}
                  whileTap={{ scale: 0.88 }}
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 36, height: 36, background: '#7c3aed', boxShadow: '0 0 18px rgba(124,58,237,0.5)', border: 'none', cursor: 'pointer' }}
                >
                  {playing
                    ? <Pause size={14} fill="white" color="white" />
                    : <Play size={14} fill="white" color="white" style={{ marginLeft: 2 }} />}
                </motion.button>
                {iconBtn(() => skip(10), <RotateCw size={15} />)}
              </div>

              {/* right: volume + pip + fullscreen */}
              <div className="flex items-center gap-1.5 shrink-0">
                {iconBtn(() => {
                  const v = videoRef.current;
                  if (!v) return;
                  const next = !muted;
                  v.muted = next;
                  if (!next) v.volume = volume;
                  setMuted(next);
                }, muted ? <VolumeX size={14} /> : <Volume2 size={14} />)}
                <input
                  type="range" min={0} max={1} step={0.01} value={muted ? 0 : volume}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setVolume(val);
                    setMuted(val === 0);
                    if (videoRef.current) videoRef.current.volume = val;
                  }}
                  style={{ width: 52, accentColor: '#7c3aed', cursor: 'pointer' }}
                />
                {iconBtn(() => videoRef.current?.requestFullscreen?.(), <Maximize2 size={14} />)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── main export ─────────────────────────────────────────────────────────────

export function VideoPlayerModal({ video, isOpen, onClose }) {
  const youtubeId = extractYouTubeId(video?.url);
  const cfg = PLATFORM_CONFIG[video?.platform] || DEFAULT_PLATFORM;

  return (
    <AnimatePresence>
      {isOpen && video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ y: 52, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 52, scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: 'rgba(8,8,12,0.98)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* header bar */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.15em]">
                  Now Playing
                </span>
                <span
                  className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}
                >
                  {video.platform}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* video */}
            <div className="p-4 pb-3">
              {youtubeId
                ? <YouTubePlayer videoId={youtubeId} title={video.title} />
                : <DirectVideoPlayer url={video.url} />}
            </div>

            {/* footer */}
            <div className="px-5 pb-5">
              <h3 className="text-white font-semibold text-sm leading-snug mb-0.5">
                {video.title}
              </h3>
              <p className="text-white/30 text-xs mb-4">
                {video.duration}
              </p>

              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: cfg.color }} />
                  <span className="text-white/40 text-xs">
                    Edited in{' '}
                    <span style={{ color: cfg.color }} className="font-medium">
                      {video.platform}
                    </span>
                  </span>
                </div>

                <a
                  href={video.downloadUrl}
                  download
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all hover:brightness-125"
                  style={{
                    background: 'rgba(124,58,237,0.15)',
                    color: '#a78bfa',
                    border: '1px solid rgba(124,58,237,0.25)',
                  }}
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Project File
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
