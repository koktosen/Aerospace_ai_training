import React from 'react';
import { LucideIcon } from 'lucide-react';

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
  return (
    <div className="flex flex-wrap border-b border-[#689EB8] mb-4">
      {tabs.map(tab => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            className={`px-6 py-3 cursor-pointer rounded-t-lg font-medium ${
              activeTab === tab.id
                ? 'bg-[#689EB8] text-white'
                : 'bg-[#F3F4F6] hover:bg-[#E5E7EB] text-gray-800 hover:text-[#689EB8]'
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            <div className="flex items-center">
              <Icon
                size={18}
                className={`mr-2 ${activeTab === tab.id ? 'text-white' : 'text-[#FF5A60]'}`}
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