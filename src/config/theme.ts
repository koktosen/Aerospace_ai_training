export interface ThemeConfig {
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    textPrimary: string;
    textSecondary: string;
    background: string;
    backgroundLight: string;
  };
  fontSizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

// Color palette based on attractive Airbnb imagery
const colorPalettes = {
  aerospace: {
    primary: '#689EB8', // Teal/light blue
    secondary: '#F3F4F6', // Light gray  
    accent: '#FF5A60', // Coral/red
    text: '#333333',
    background: '#F9FAFB',
    headerBg: '#689EB8',
    headerText: '#FFFFFF',
    cardBg: '#FFFFFF',
    highlight: '#A79B94', // Beige/tan
  },
  // Keep existing industry themes for reference
  manufacturing: {
    primary: '#2563EB',
    secondary: '#F3F4F6',
    accent: '#FCD34D',
    text: '#333333',
    background: '#F9FAFB',
    headerBg: '#1E40AF',
    headerText: '#FFFFFF',
    cardBg: '#FFFFFF',
    highlight: '#DBEAFE',
  },
  healthcare: {
    primary: '#10B981',
    secondary: '#F3F4F6',
    accent: '#8B5CF6',
    text: '#333333',
    background: '#F9FAFB',
    headerBg: '#065F46',
    headerText: '#FFFFFF',
    cardBg: '#FFFFFF',
    highlight: '#D1FAE5',
  },
  finance: {
    primary: '#6366F1',
    secondary: '#F3F4F6',
    accent: '#F59E0B',
    text: '#333333',
    background: '#F9FAFB',
    headerBg: '#4338CA',
    headerText: '#FFFFFF',
    cardBg: '#FFFFFF',
    highlight: '#E0E7FF',
  },
};

// Default theme is now the aerospace theme
const defaultTheme = 'aerospace';

export { colorPalettes, defaultTheme };

// Default aerospace theme
export const aerospaceTheme: ThemeConfig = {
  colors: {
    primary: '#689EB8', // Teal/light blue from the Airbnb promotion
    primaryLight: '#7DAEC7',
    primaryDark: '#5B8EA9',
    secondary: '#FF5A60', // Coral/red accent from the Airbnb promotion
    secondaryLight: '#FF7A7F',
    secondaryDark: '#E54A50',
    textPrimary: '#333333',
    textSecondary: '#555555',
    background: '#FFFFFF',
    backgroundLight: '#F3F4F6',
  },
  fontSizes: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  },
  borderRadius: {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
  },
};

// Theme for healthcare industry
export const healthcareTheme: ThemeConfig = {
  colors: {
    primary: 'teal-600',
    primaryLight: 'teal-500',
    primaryDark: 'teal-700',
    secondary: 'purple-400',
    secondaryLight: 'purple-300',
    secondaryDark: 'purple-500',
    textPrimary: 'gray-800',
    textSecondary: 'gray-700',
    background: 'white',
    backgroundLight: 'slate-100',
  },
  fontSizes: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  },
  borderRadius: {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
  },
};

// Theme for manufacturing industry
export const manufacturingTheme: ThemeConfig = {
  colors: {
    primary: 'slate-700',
    primaryLight: 'slate-600',
    primaryDark: 'slate-800',
    secondary: 'amber-500',
    secondaryLight: 'amber-400',
    secondaryDark: 'amber-600',
    textPrimary: 'gray-800',
    textSecondary: 'gray-700',
    background: 'white',
    backgroundLight: 'slate-100',
  },
  fontSizes: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  },
  borderRadius: {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
  },
}; 