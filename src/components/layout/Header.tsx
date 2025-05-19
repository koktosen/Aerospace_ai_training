import React from 'react';
import { Plane } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-[#689EB8] text-white p-6 rounded-t-lg shadow-md mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Aerospace AI Implementation</h1>
          <p className="text-blue-100">
            Transforming aerospace operations through LLM and RAG technologies
          </p>
        </div>
        <div className="relative">
          <div className="absolute -top-3 -right-3 bg-[#FF5A60] text-white text-xs px-2 py-1 rounded-full">
            NEW
          </div>
          <div className="bg-[#A79B94] bg-opacity-20 p-3 rounded-full">
            <Plane size={48} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 