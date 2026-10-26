import { findSocial } from '@ferion/profile';
import {
  BriefcaseBusiness,
  FolderGit2,
  House,
  Mail,
  Moon,
  NotebookPen,
  Sun,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import useActiveSection from '@/hooks/useActiveSection';
import useClickSound from '@/hooks/useClickSound';
import useMediaQuery from '@/hooks/useMediaQuery';
import useTheme from '@/hooks/useTheme';
import Dock from './Dock';
import DockItem from './DockItem';
import DockSeparator from './DockSeparator';

interface DockSection {
  id: string;
  label: string;
  Icon: LucideIcon;
  isDesktopOnly?: boolean;
}

const SECTIONS: DockSection[] = [
  { id: 'hero', label: 'Home', Icon: House },
  { id: 'experience', label: 'Experience', Icon: BriefcaseBusiness },
  { id: 'projects', label: 'Projects', Icon: FolderGit2 },
  { id: 'hackathons', label: 'Hackathons', Icon: Trophy },
  { id: 'blog', label: 'Writing', Icon: NotebookPen },
  { id: 'contact', label: 'Contact', Icon: Mail, isDesktopOnly: true },
];

const SECTION_IDS = SECTIONS.map(section => section.id);
const EXTERNAL = [
  { ...findSocial('github'), Icon: FaGithub },
  { ...findSocial('linkedin'), Icon: FaLinkedin },
];

export interface SiteDockProps {
  // the Writing section only renders when the blog has posts, so its icon follows it
  showWriting: boolean;
}

export default function SiteDock({ showWriting }: SiteDockProps) {
  const active = useActiveSection(SECTION_IDS);
  const sections = showWriting ? SECTIONS : SECTIONS.filter(section => section.id !== 'blog');
  const { theme, toggleTheme } = useTheme();
  const playClick = useClickSound();
  const isDesktop = useMediaQuery('(min-width: 640px)');

  const handleThemeClick = () => {
    playClick();
    toggleTheme();
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 flex justify-center px-3">
      <div className="pointer-events-auto rounded-full border-2 border-line bg-card p-1.5 shadow-[4px_4px_0_var(--line)] sm:p-2">
        <Dock label="Primary" baseSize={isDesktop ? 40 : 38} className="gap-1.5 sm:gap-2">
          {sections.map(({ id, label, Icon, isDesktopOnly }) => (
            <DockItem
              key={id}
              label={label}
              href={`#${id}`}
              isActive={active === id}
              onClick={playClick}
              className={isDesktopOnly ? 'max-sm:hidden' : undefined}
            >
              <Icon strokeWidth={2} aria-hidden="true" />
            </DockItem>
          ))}

          <DockSeparator className="max-sm:hidden" />

          {EXTERNAL.map(({ id, label, href, Icon }) => (
            <DockItem key={id} label={label} href={href} onClick={playClick} className="max-sm:hidden">
              <Icon aria-hidden="true" />
            </DockItem>
          ))}

          <DockSeparator />

          <DockItem
            label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={handleThemeClick}
          >
            {theme === 'dark' ? (
              <Sun strokeWidth={2} aria-hidden="true" />
            ) : (
              <Moon strokeWidth={2} aria-hidden="true" />
            )}
          </DockItem>
        </Dock>
      </div>
    </div>
  );
}
