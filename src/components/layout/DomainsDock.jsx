import { Brain, Camera, Clapperboard, Cpu, Gamepad2, Languages, Trophy } from 'lucide-react';
import { MacOSDock } from '@/components/dock/MacOSDock';
import { domains } from '@/data/domains';

const tileByTitle = {
  Technology: { Icon: Cpu, gradient: 'from-sky-500 to-cyan-400' },
  Gaming: { Icon: Gamepad2, gradient: 'from-violet-500 to-purple-400' },
  'Language & Culture': { Icon: Languages, gradient: 'from-amber-500 to-orange-400' },
  Psychology: { Icon: Brain, gradient: 'from-pink-500 to-rose-400' },
  'Content Creation': { Icon: Camera, gradient: 'from-emerald-500 to-teal-400' },
  Sports: { Icon: Trophy, gradient: 'from-red-500 to-orange-400' },
  Entertainment: { Icon: Clapperboard, gradient: 'from-indigo-500 to-blue-400' },
};

const CONTENT_CREATION_ID = '05';
const TECHNOLOGY_ID = '01';

export function DomainsDock({ onContentCreationClick, onTechnologyClick }) {
  const dockApps = domains.map((domain) => {
    const { Icon, gradient } = tileByTitle[domain.title];
    return {
      id: domain.num,
      name: domain.title,
      icon: (
        <div
          className={`flex h-full w-full items-center justify-center rounded-[22%] bg-gradient-to-br ${gradient} shadow-lg`}
        >
          <Icon className="h-1/2 w-1/2 text-white" strokeWidth={2.25} />
        </div>
      ),
    };
  });

  const handleAppClick = (appId) => {
    if (appId === CONTENT_CREATION_ID) { onContentCreationClick?.(); return; }
    if (appId === TECHNOLOGY_ID) { onTechnologyClick?.(); return; }
    const domain = domains.find((d) => d.num === appId);
    if (domain?.link && domain.link !== '#') {
      window.open(domain.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="fixed left-1/2 z-40 -translate-x-1/2"
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <MacOSDock apps={dockApps} onAppClick={handleAppClick} />
    </div>
  );
}
