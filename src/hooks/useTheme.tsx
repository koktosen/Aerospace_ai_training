import React, { createContext, useContext, useState, ReactNode } from 'react';
import { aerospaceTheme, ThemeConfig } from '../config/theme';

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeConfig>(aerospaceTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Helper function to get a specific color with theme value
export const getThemeColor = (colorName: keyof ThemeConfig['colors']): string => {
  const { theme } = useTheme();
  return theme.colors[colorName];
}; 