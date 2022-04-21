import { createContext, useState } from 'react';

export interface IThemeContext {
   theme: boolean;
   setTheme: (arg: boolean) => void;
}

interface ThemeContextProps {
   children: React.ReactNode;
}

export const themeContext = createContext<IThemeContext | null>(null);

export default function ThemeContext(props: ThemeContextProps): JSX.Element {
   const [theme, setTheme] = useState<boolean>(true);

   return (
      <themeContext.Provider value={{ theme, setTheme }}>{props.children}</themeContext.Provider>
   );
}
