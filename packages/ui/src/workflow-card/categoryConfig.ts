import type { ToolCategoryConfig } from './types.ts';

const GENERAL: ToolCategoryConfig = { bgColor: 'bg-gray-500/20', iconColor: 'text-gray-600 dark:text-gray-400' };

export const DEFAULT_CATEGORY_CONFIG: Record<string, ToolCategoryConfig> = {
  productivity: { bgColor: 'bg-emerald-500/20', iconColor: 'text-emerald-600 dark:text-emerald-400' },
  documents: { bgColor: 'bg-orange-500/20', iconColor: 'text-orange-600 dark:text-orange-400' },
  development: { bgColor: 'bg-sky-500/20', iconColor: 'text-cyan-600 dark:text-cyan-400' },
  memory: { bgColor: 'bg-indigo-500/20', iconColor: 'text-indigo-600 dark:text-indigo-400' },
  creative: { bgColor: 'bg-pink-500/20', iconColor: 'text-pink-600 dark:text-pink-400' },
  goal_tracking: { bgColor: 'bg-emerald-500/20', iconColor: 'text-emerald-600 dark:text-emerald-400' },
  notifications: { bgColor: 'bg-yellow-500/20', iconColor: 'text-yellow-600 dark:text-yellow-400' },
  email: { bgColor: 'bg-sky-500/20', iconColor: 'text-blue-600 dark:text-blue-400' },
  calendar: { bgColor: 'bg-purple-500/20', iconColor: 'text-purple-600 dark:text-purple-400' },
  search: { bgColor: 'bg-teal-500/20', iconColor: 'text-teal-600 dark:text-teal-400' },
  general: GENERAL,
};

// unknown categories fall back to the config's own "general", then to the default one
export function findCategoryConfig(category: string, config = DEFAULT_CATEGORY_CONFIG): ToolCategoryConfig {
  return config[category] ?? config.general ?? GENERAL;
}
