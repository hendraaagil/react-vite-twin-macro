import 'twin.macro';
import { Link } from 'react-router-dom';

const Anchor = ({ children, isExternal, url }) => {
  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        tw="mx-4 text-blue-400 hover:underline"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={url} tw="mx-4 text-blue-400 hover:underline">
      {children}
    </Link>
  );
};

export default Anchor;
