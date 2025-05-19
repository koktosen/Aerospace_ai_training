import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface Tab {
  id: number;
  label: string;
  icon: LucideIcon;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: number;
  onTabChange: (tabId: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-nowrap overflow-x-auto border-b border-b-gray-200 mb-4">
      {tabs.map(tab => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            className={`px-4 py-3 cursor-pointer rounded-t-lg font-medium flex-shrink-0 whitespace-nowrap ${
              activeTab === tab.id
                ? `bg-[${theme.colors.primary}] text-white`
                : `bg-[${theme.colors.backgroundLight}] hover:bg-gray-200 text-gray-800 hover:text-[${theme.colors.primary}]`
            }`}
            onClick={() => onTabChange(tab.id)}
            style={{
              backgroundColor: activeTab === tab.id ? theme.colors.primary : theme.colors.backgroundLight,
              color: activeTab === tab.id ? 'white' : 'rgb(31, 41, 55)',
            }}
          >
            <div className="flex items-center">
              <Icon
                size={18}
                className="mr-2"
                style={{
                  color: activeTab === tab.id ? 'white' : theme.colors.secondary
                }}
              />
              {tab.label}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default TabNavigation; 