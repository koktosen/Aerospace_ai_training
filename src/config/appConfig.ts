import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  DollarSign, 
  Target 
} from 'lucide-react';

// Define tab IDs as a type for type safety
export type TabId = 
  | 'learning-objectives' 
  | 'time-savings' 
  | 'accuracy-improvement' 
  | 'roi-calculator' 
  | 'implementation';

// Tab configuration
export const tabsConfig = [
  {
    id: 'learning-objectives' as TabId,
    label: 'Learning Objectives',
    icon: BookOpen
  },
  {
    id: 'time-savings' as TabId,
    label: 'Time Savings',
    icon: Clock
  },
  {
    id: 'accuracy-improvement' as TabId,
    label: 'Accuracy Improvement',
    icon: CheckCircle
  },
  {
    id: 'roi-calculator' as TabId,
    label: 'ROI Calculator',
    icon: DollarSign
  },
  {
    id: 'implementation' as TabId,
    label: 'Implementation',
    icon: Target
  }
];

// Main application configuration
export interface AppConfig {
  title: string;
  subtitle: string;
  defaultTab: TabId;
  showLogo: boolean;
}

// Default configuration
export const defaultAppConfig: AppConfig = {
  title: 'Aerospace AI Implementation',
  subtitle: 'Transforming aerospace operations through LLM and RAG technologies',
  defaultTab: 'learning-objectives',
  showLogo: true,
}; 