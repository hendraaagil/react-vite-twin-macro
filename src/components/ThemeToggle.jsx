import 'twin.macro';
import { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div tw="absolute right-0 mt-2 mr-2 xs:mt-4 xs:mr-4 transition duration-500 ease-in-out rounded-md p-2">
      {theme === 'dark' ? (
        <FaSun
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          tw="text-gray-800 dark:text-gray-50 text-xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          tw="text-gray-800 dark:text-gray-50 text-xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
