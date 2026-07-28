import { cn } from '@/lib/utils';

const VARIANT_CLASSES = {
  default: 'btn-primary',
  outline: 'btn-outline btn-primary',
  ghost: 'btn-text',
};

const SIZE_CLASSES = {
  default: 'btn-md',
  lg: 'btn-lg',
  icon: 'btn-square btn-md',
};

export function Button({ className, variant = 'default', size = 'default', ...props }) {
  return (
    <button
      data-slot="button"
      className={cn('btn', VARIANT_CLASSES[variant], SIZE_CLASSES[size], className)}
      {...props}
    />
  );
}
