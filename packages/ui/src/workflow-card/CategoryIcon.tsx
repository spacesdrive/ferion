import { isValidElement, type ComponentType } from 'react';
import cn from '../lib/cn.ts';
import { findCategoryConfig } from './categoryConfig.ts';
import type { ToolCategoryConfig } from './types.ts';

export interface CategoryIconProps {
  category: string;
  config?: Record<string, ToolCategoryConfig>;
  className?: string;
}

export default function CategoryIcon({ category, config, className }: CategoryIconProps) {
  const categoryConfig = findCategoryConfig(category, config);

  return (
    <div className={cn('rounded-lg p-1.5', categoryConfig.bgColor, className)}>
      <div className={cn('flex h-5 w-5 items-center justify-center overflow-hidden rounded', categoryConfig.iconColor)}>
        <CategoryGlyph category={category} config={categoryConfig} />
      </div>
    </div>
  );
}

function CategoryGlyph({ category, config }: { category: string; config: ToolCategoryConfig }) {
  if (config.imageUrl) {
    return <img src={config.imageUrl} alt={category} width={20} height={20} className="h-full w-full object-cover" />;
  }
  if (isValidElement(config.icon)) return config.icon;
  // icon sets ship components as plain functions or as forwardRef/memo objects, so anything else is a component
  if (config.icon && typeof config.icon !== 'string' && typeof config.icon !== 'number') {
    const Icon = config.icon as ComponentType<{ className?: string }>;
    return <Icon className="h-full w-full" />;
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-full w-full">
      <title>{category}</title>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
