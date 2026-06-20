import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Play, ArrowUpRight } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { VideoPlayerModal } from '@/components/sections/VideoPlayerModal';


const OPERATIONS = [
  {
    id: 'OP-001',
    company: 'Runable',
    project: 'Brand Awareness',
    role: 'Growth Intern',
    period: 'Oct 2025 – Present',
    status: 'ACTIVE',
    link: 'https://runable.com',
  },
];

const ACCOUNTS = [
  {
    platform: 'Instagram',
    handle: '@yugaantar.sst',
    link: 'https://www.instagram.com/yugaantar.sst',
    followers: '1.1K',
    niche: 'Cultural Fest 2025',
    status: 'COMPLETED',
    icon: FaInstagram,
    color: 'text-pink-500',
    bg: 'bg-pink-50 border-pink-200',
  },
  {
    platform: 'Instagram',
    handle: '@ascent.sst',
    link: 'https://www.instagram.com/ascent.sst',
    followers: '1.1K',
    niche: 'Tech Fest 2026',
    status: 'COMPLETED',
    icon: FaInstagram,
    color: 'text-pink-500',
    bg: 'bg-pink-50 border-pink-200',
  },
  {
    platform: 'Instagram',
    handle: '@lifeatsst_official',
    link: 'https://www.instagram.com/lifeatsst_official',
    followers: '1.7K',
    niche: 'College Reels 2025',
    status: 'COMPLETED',
    icon: FaInstagram,
    color: 'text-pink-500',
    bg: 'bg-pink-50 border-pink-200',
  },
];

const VIDEOS = [
  {
    title: 'Spiderman Brand New Day',
    duration: '00:16',
    tag: 'Flow',
    url: 'https://res.cloudinary.com/di7nn8znb/video/upload/v1781867104/Output_hq0vxx.mp4',
    platform: 'Davinci Resolve',
    downloadUrl: 'https://ferion.gumroad.com/l/phdihm',
  },
];

// ─── UI ATOMS ────────────────────────────────────────────────────────────────

const STATUS_CONFIG = {
  ACTIVE: 'bg-emerald-100 border-emerald-400 text-emerald-800',
  COMPLETED: 'bg-blue-100 border-blue-400 text-blue-800',
  PAUSED: 'bg-amber-100 border-amber-400 text-amber-800',
  MANAGED: 'bg-violet-100 border-violet-400 text-violet-800',
  'IN PROGRESS': 'bg-cyan-100 border-cyan-400 text-cyan-800',
};

function StatusBadge({ status }) {
  const cls = STATUS_CONFIG[status] || 'bg-stone-100 border-stone-400 text-stone-700';
  return (
    <span className={cn('inline-block px-2 py-0.5 rounded border font-typewriter text-[10px] font-bold tracking-wider uppercase', cls)}>
      {status}
    </span>
  );
}

function FolderTab({ title, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-3 sm:px-5 py-2.5 rounded-t-xl font-typewriter font-bold text-xs tracking-tight border-t-2 border-x-2 border-[#bfaea3] relative -mb-[2px] z-10 transition-all whitespace-nowrap',
        active
          ? 'bg-[#f3f0eb] text-stone-900 shadow-[0_-5px_10px_rgba(0,0,0,0.05)]'
          : 'bg-[#d8d0c5] text-stone-600 hover:bg-[#e6dfd4] mt-2'
      )}
    >
      {title}
    </button>
  );
}

// ─── TAB CONTENTS ────────────────────────────────────────────────────────────

function OperationsTab() {
  return (
    <div className="space-y-3">
      <p className="font-typewriter text-xs text-stone-500 uppercase tracking-widest mb-4">
        // Projects & Companies — Field Operations Log
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-typewriter text-sm">
          <thead>
            <tr className="border-b-2 border-[#bfaea3]">
              <th className="text-left py-2 pr-4 text-xs uppercase tracking-widest text-stone-500 font-bold">ID</th>
              <th className="text-left py-2 pr-4 text-xs uppercase tracking-widest text-stone-500 font-bold">Company</th>
              <th className="text-left py-2 pr-4 text-xs uppercase tracking-widest text-stone-500 font-bold">Project</th>
              <th className="text-left py-2 pr-4 text-xs uppercase tracking-widest text-stone-500 font-bold hidden md:table-cell">Role</th>
              <th className="text-left py-2 pr-4 text-xs uppercase tracking-widest text-stone-500 font-bold hidden lg:table-cell">Period</th>
              <th className="text-left py-2 text-xs uppercase tracking-widest text-stone-500 font-bold">Status</th>
              <th className="py-2 w-6" />
            </tr>
          </thead>
          <tbody>
            {OPERATIONS.map((op) => (
              <tr
                key={op.id}
                onClick={() => op.link && op.link !== '#' && window.open(op.link, '_blank', 'noopener,noreferrer')}
                className="border-b border-[#d1c7bd] transition-colors group cursor-pointer hover:bg-[#ede8e2] active:bg-[#e0d8cf]"
              >
                <td className="py-3 pr-4 text-stone-400 text-xs">{op.id}</td>
                <td className="py-3 pr-4 text-stone-800 font-bold text-xs">{op.company}</td>
                <td className="py-3 pr-4 text-stone-700 text-xs leading-snug max-w-[180px]">{op.project}</td>
                <td className="py-3 pr-4 text-stone-600 text-xs hidden md:table-cell">{op.role}</td>
                <td className="py-3 pr-4 text-stone-500 text-xs hidden lg:table-cell whitespace-nowrap">{op.period}</td>
                <td className="py-3"><StatusBadge status={op.status} /></td>
                <td className="py-3 text-stone-300 group-hover:text-stone-600 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AccountsTab() {
  return (
    <div className="space-y-3">
      <p className="font-typewriter text-xs text-stone-500 uppercase tracking-widest mb-4">
        // Accounts — Created & Managed
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ACCOUNTS.map((acc, i) => {
          const Icon = acc.icon;
          return (
            <a
              key={acc.handle}
              href={acc.link !== '#' ? acc.link : undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => acc.link === '#' && e.preventDefault()}
              className={cn(
                'flex items-start gap-3 p-4 rounded-lg border-2 bg-white/60 hover:bg-white/90 hover:shadow-md transition-all group cursor-pointer block',
                acc.bg
              )}
              style={{ textDecoration: 'none' }}
            >
              <div className={cn('mt-0.5 shrink-0', acc.color)}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-typewriter font-bold text-xs text-stone-800 truncate">{acc.platform}</span>
                  <StatusBadge status={acc.status} />
                </div>
                <p className="font-typewriter text-sm text-stone-700 mt-0.5">{acc.handle}</p>
                <p className="font-typewriter text-xs text-stone-500 mt-1">{acc.niche}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-typewriter text-xs font-bold text-stone-800">{acc.followers} followers</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-300 group-hover:text-stone-600 transition-colors" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function VideosTab({ onVideoClick }) {
  return (
    <div className="space-y-3">
      <p className="font-typewriter text-xs text-stone-500 uppercase tracking-widest mb-4">
        // Best Videos — Showcase Reel
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {VIDEOS.map((vid, i) => (
          <button
            key={vid.title}
            onClick={() => onVideoClick(vid)}
            className="group text-left bg-white/60 hover:bg-white/90 rounded-lg border-2 border-[#d1c7bd] overflow-hidden transition-all hover:shadow-md hover:border-[#a09080] w-full"
          >
            {/* thumbnail */}
            <div className="relative w-full aspect-video bg-stone-900 overflow-hidden">
              <video
                src={vid.url}
                preload="metadata"
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                  <Play className="w-5 h-5 text-stone-700 ml-0.5" fill="currentColor" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 font-typewriter text-xs bg-black/60 text-white px-1.5 py-0.5 rounded">
                {vid.duration}
              </span>
              <span className="absolute top-2 left-2 font-typewriter text-[10px] bg-stone-800/70 text-stone-100 px-2 py-0.5 rounded uppercase tracking-wider">
                {vid.tag}
              </span>
              <span className="absolute top-2 right-2 font-typewriter text-[9px] bg-stone-900/80 text-stone-300 px-1.5 py-0.5 rounded uppercase tracking-wider">
                {vid.platform}
              </span>
            </div>
            <div className="p-3">
              <p className="font-typewriter text-xs font-bold text-stone-800 leading-snug line-clamp-2 group-hover:text-stone-900">
                {vid.title}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export function ContentCreationPortfolio({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('operations');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = (video) => {
    setSelectedVideo(video);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{ background: 'rgba(10, 10, 10, 0.65)', backdropFilter: 'blur(6px)' }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <motion.div
              initial={{ y: 48, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 48, scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 340, damping: 30 }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: '#f3f0eb',
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* coffee stain */}
              <div
                className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20"
                style={{ border: '8px solid rgba(77,56,38,0.4)', boxShadow: '0 0 15px rgba(77,56,38,0.15) inset' }}
              />

              {/* header */}
              <div className="relative z-10 px-4 sm:px-6 pt-4 sm:pt-6 pb-0 border-b-2 border-[#bfaea3] shrink-0">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="font-typewriter text-[10px] tracking-[0.25em] uppercase text-stone-400">
                      DOSSIER // CONTENT CREATION DIVISION
                    </p>
                    <h1 className="font-stamp text-2xl sm:text-3xl text-stone-800 mt-1 leading-tight">
                      Content Creation Portfolio
                    </h1>
                    <p className="font-typewriter text-xs text-stone-500 mt-1">
                      Classified record of operations, channels & productions
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-stone-200/80 transition-colors text-stone-500 hover:text-stone-800 shrink-0 ml-4"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex gap-1 overflow-x-auto pb-0">
                  <FolderTab title="Operations" active={activeTab === 'operations'} onClick={() => setActiveTab('operations')} />
                  <FolderTab title="Accounts" active={activeTab === 'accounts'} onClick={() => setActiveTab('accounts')} />
                  <FolderTab title="Best Videos" active={activeTab === 'videos'} onClick={() => setActiveTab('videos')} />
                </div>
              </div>

              {/* tab content */}
              <div className="relative z-10 overflow-y-auto flex-1 p-4 sm:p-6 border-t-2 border-[#bfaea3]" style={{ background: '#f3f0eb' }}>
                <div style={{ display: activeTab === 'operations' ? 'block' : 'none' }}><OperationsTab /></div>
                <div style={{ display: activeTab === 'accounts' ? 'block' : 'none' }}><AccountsTab /></div>
                <div style={{ display: activeTab === 'videos' ? 'block' : 'none' }}><VideosTab onVideoClick={openVideo} /></div>
              </div>

              {/* footer stamp */}
              <div className="relative z-10 shrink-0 px-4 sm:px-6 py-3 border-t border-[#d1c7bd] flex items-center justify-between">
                <span className="font-typewriter text-[10px] text-stone-400 uppercase tracking-widest">
                  ferion // content division
                </span>
                <div className="border-2 border-stone-400/40 px-3 py-1 rotate-[-2deg]">
                  <span className="font-stamp text-stone-400/60 text-sm uppercase tracking-widest">Confidential</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <VideoPlayerModal video={selectedVideo} isOpen={isVideoOpen} onClose={closeVideo} />
    </>
  );
}
