import tw from 'twin.macro';
import { Link } from 'react-router-dom';

const Anchor = ({ children, isExternal, url }) => {
  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        css={[
          tw`mx-2 xs:mx-4`,
          tw`text-base xs:text-lg text-blue-600 dark:text-blue-400`,
          tw`hover:underline`,
        ]}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={url}
      css={[
        tw`mx-2 xs:mx-4`,
        tw`text-base xs:text-lg text-blue-600 dark:text-blue-400`,
        tw`hover:underline`,
      ]}
    >
      {children}
    </Link>
  );
};

export default Anchor;
