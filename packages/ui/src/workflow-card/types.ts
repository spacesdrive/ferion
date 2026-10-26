import type { ComponentType, ReactNode } from 'react';

export interface ToolCategoryConfig {
  icon?: ComponentType<{ className?: string }> | ReactNode;
  imageUrl?: string;
  bgColor: string;
  iconColor: string;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description?: string;
  toolCategory: string;
}

export type WorkflowCardVariant = 'user' | 'explore' | 'suggestion';
