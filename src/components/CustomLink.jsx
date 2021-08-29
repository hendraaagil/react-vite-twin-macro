import 'twin.macro';

const CustomLink = ({ text, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    tw="mx-4 text-[#61dafb] hover:underline"
  >
    {text}
  </a>
);

export default CustomLink;
