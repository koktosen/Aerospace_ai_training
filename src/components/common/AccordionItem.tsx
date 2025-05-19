import React, { ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface AccordionItemProps {
  index: number;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  isActive: boolean;
  onToggle: (index: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ 
  index, 
  title, 
  icon, 
  children, 
  isActive, 
  onToggle 
}) => {
  return (
    <div className="border rounded-md mb-4 overflow-hidden shadow-sm">
      <button
        className={`w-full flex items-center justify-between p-4 text-left ${

            isActive ? 'bg-[#689EB8] text-white' : 'bg-white text-gray-800'
        }`}
        onClick={() => onToggle(index)}
      >
        <div className="flex items-center space-x-2">
          {icon}
          <span className="font-medium">{title}</span>
        </div>
        {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isActive && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
};

export default AccordionItem; 