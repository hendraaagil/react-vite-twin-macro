import tw from 'twin.macro';
import { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      css={[
        tw`absolute right-0 mt-2 mr-2 xs:mt-4 xs:mr-4 p-2`,
        tw`outline-none transition-all rounded-md`,
        tw`hover:bg-gray-100 dark:hover:bg-gray-700`,
        tw`focus:ring focus-visible:ring`,
      ]}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <FaSun
          css={[
            tw`text-gray-800 dark:text-gray-50 text-xl`,
            tw`cursor-pointer`,
          ]}
        />
      ) : (
        <FaMoon
          css={[
            tw`text-gray-800 dark:text-gray-50 text-xl`,
            tw`cursor-pointer`,
          ]}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
