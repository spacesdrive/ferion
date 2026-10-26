import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';

// Four overlapping circles in the order top, left, right, bottom.
const CIRCLES = [
  'top-0 left-1/2 -translate-x-1/2',
  'top-[22%] left-[2%]',
  'top-[22%] right-[2%]',
  'bottom-0 left-1/2 -translate-x-1/2',
];

// Each label sits in the part of its circle that no other circle covers.
const LABELS = [
  'top-[14%] left-1/2 -translate-x-1/2 -translate-y-1/2',
  'top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2',
  'top-1/2 right-[15%] translate-x-1/2 -translate-y-1/2',
  'bottom-[14%] left-1/2 -translate-x-1/2 translate-y-1/2',
];

export function RoleVenn() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      {CIRCLES.map((position) => (
        <div
          key={position}
          aria-hidden="true"
          className={cn('absolute size-[55%] rounded-full border-2 border-rule', position)}
        />
      ))}

      <ul aria-label="Roles">
        {profile.roles.map((role, index) => (
          <li
            key={role}
            className={cn(
              'absolute text-center text-[11px] font-medium whitespace-nowrap text-muted-foreground sm:text-xs md:text-sm',
              LABELS[index]
            )}
          >
            {role}
          </li>
        ))}
      </ul>

      <div className="absolute top-1/2 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-line bg-card shadow-[3px_3px_0_var(--line)] sm:size-16 md:size-20">
        <img
          src={profile.portrait}
          alt={`Photo of ${profile.name}`}
          width="900"
          height="717"
          fetchPriority="high"
          // The portrait is a full-length shot, so zoom in on the face.
          className="mono-img size-full origin-[47%_22%] scale-[2.2] object-cover"
        />
      </div>
    </div>
  );
}
