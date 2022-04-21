import { useState, useEffect } from 'react';

export const useThemeDetector = (): any => {
   const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
   const [isDarkTheme, setIsDarkTheme] = useState<any>(getCurrentTheme());
   const mqListener = (e: any) => {
      setIsDarkTheme(e.matches);
   };

   useEffect(() => {
      const darkThemeMq: any = window.matchMedia('(prefers-color-scheme: dark)');
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
   }, []);

   return isDarkTheme;
};
