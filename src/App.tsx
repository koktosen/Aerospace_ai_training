import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import AerospaceAITraining from './components/AerospaceAITraining';

// Import styles
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AerospaceAITraining />
    </ThemeProvider>
  );
};

export default App; 