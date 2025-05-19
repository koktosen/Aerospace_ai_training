import React, { useState } from 'react';

import { ThemeProvider } from './hooks/useTheme';
import { BookOpen, Clock, CheckCircle, DollarSign, Target } from 'lucide-react';
import Header from './components/layout/Header';

// Import all tab content components
import LearningObjectives from './components/sections/LearningObjectives';
import TimeSavings from './components/sections/TimeSavings';
import AccuracyImprovement from './components/sections/AccuracyImprovement';
import RoiCalculator from './components/sections/RoiCalculator';
import Implementation from './components/sections/Implementation';

// Import styles
import './styles/globals.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Define tab configuration
  const tabs = [
    { id: 0, label: 'Learning Objectives', icon: BookOpen },
    { id: 1, label: 'Time Savings', icon: Clock },
    { id: 2, label: 'Accuracy Improvement', icon: CheckCircle },
    { id: 3, label: 'ROI Calculator', icon: DollarSign },
    { id: 4, label: 'Implementation', icon: Target }
  ];

  return (
    <ThemeProvider>
      <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-[#F7F8F9] via-[#EEF1F4] to-[#E6EAF0] rounded-lg shadow-lg border border-[#689EB8] border-opacity-10">
        <Header />
        
        <div className="mb-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-[#689EB8] mb-4">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`px-4 py-3 cursor-pointer rounded-t-lg font-medium ${
                    activeTab === tab.id
                      ? 'bg-[#689EB8] text-white'
                      : 'bg-[#F3F4F6] hover:bg-[#E5E7EB] text-gray-800 hover:text-[#689EB8]'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
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

          {/* Render the active tab content */}
          {activeTab === 0 && <LearningObjectives />}
          {activeTab === 1 && <TimeSavings />}
          {activeTab === 2 && <AccuracyImprovement />}
          {activeTab === 3 && <RoiCalculator />}
          {activeTab === 4 && <Implementation />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App; 