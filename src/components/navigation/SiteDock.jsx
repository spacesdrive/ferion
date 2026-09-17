import { BriefcaseBusiness, FolderGit2, House, Mail, Moon, NotebookPen, Sun, Trophy, User } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Dock, DockItem, DockSeparator } from '@/components/navigation/Dock';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useClickSound } from '@/hooks/useClickSound';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useTheme } from '@/hooks/useTheme';
import { socials } from '@/data/profile';

const SECTIONS = [
  { id: 'hero', label: 'Home', Icon: House },
  { id: 'about', label: 'About', Icon: User, desktopOnly: true },
  { id: 'experience', label: 'Experience', Icon: BriefcaseBusiness },
  { id: 'projects', label: 'Projects', Icon: FolderGit2 },
  { id: 'hackathons', label: 'Hackathons', Icon: Trophy },
  { id: 'blog', label: 'Writing', Icon: NotebookPen },
  { id: 'contact', label: 'Contact', Icon: Mail, desktopOnly: true },
];

const SECTION_IDS = SECTIONS.map((section) => section.id);
const EXTERNAL = [
  { ...socials.find((social) => social.id === 'github'), Icon: FaGithub },
  { ...socials.find((social) => social.id === 'linkedin'), Icon: FaLinkedin },
];

export function SiteDock() {
  const active = useActiveSection(SECTION_IDS);
  const { theme, toggleTheme } = useTheme();
  const playClick = useClickSound();
  const isDesktop = useMediaQuery('(min-width: 640px)');

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 flex justify-center px-3">
      <div className="pointer-events-auto rounded-full border bg-card/80 p-1.5 shadow-lg shadow-foreground/5 backdrop-blur-xl sm:p-2">
        <Dock label="Primary" baseSize={isDesktop ? 40 : 38} className="gap-1.5 sm:gap-2">
          {SECTIONS.map(({ id, label, Icon, desktopOnly }) => (
            <DockItem
              key={id}
              label={label}
              href={`#${id}`}
              active={active === id}
              onClick={playClick}
              className={desktopOnly ? 'max-sm:hidden' : undefined}
            >
              <Icon strokeWidth={1.75} aria-hidden="true" />
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
            onClick={() => {
              playClick();
              toggleTheme();
            }}
          >
            {theme === 'dark' ? (
              <Sun strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Moon strokeWidth={1.75} aria-hidden="true" />
            )}
          </DockItem>
        </Dock>
      </div>
    </div>
  );
}
