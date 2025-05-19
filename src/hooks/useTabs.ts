import { useState } from 'react';

interface UseTabsResult<T extends string> {
  activeTab: T;
  setActiveTab: (tabId: T) => void;
  isTabActive: (tabId: T) => boolean;
}

export const useTabs = <T extends string>(defaultTab: T): UseTabsResult<T> => {
  const [activeTab, setActiveTab] = useState<T>(defaultTab);

  const isTabActive = (tabId: T): boolean => {
    return activeTab === tabId;
  };

  return {
    activeTab,
    setActiveTab,
    isTabActive,
  };
}; 