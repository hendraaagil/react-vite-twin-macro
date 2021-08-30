import { Global } from '@emotion/react';
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
  body {
    font-family: 'Poppins', sans-serif;
    ${tw`bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-50`}
    ${tw`transition-all`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
