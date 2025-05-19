import { useState } from 'react';

interface UseAccordionResult {
  activeAccordion: number | null;
  toggleAccordion: (index: number) => void;
  isAccordionActive: (index: number) => boolean;
}

export const useAccordion = (defaultActive: number | null = null): UseAccordionResult => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(defaultActive);

  const toggleAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const isAccordionActive = (index: number): boolean => {
    return activeAccordion === index;
  };

  return {
    activeAccordion,
    toggleAccordion,
    isAccordionActive,
  };
}; 