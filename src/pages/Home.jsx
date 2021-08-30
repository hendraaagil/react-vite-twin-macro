import tw from 'twin.macro';
import { Fragment } from 'react';

import reactLogo from '../assets/react-logo.png';
import twinLogo from '../assets/twin-logo.png';
import viteLogo from '../assets/vite-logo.svg';
import Anchor from '../components/Anchor';
import Button from '../components/Button';

const Home = ({ history }) => {
  const logos = [
    { src: reactLogo, alt: 'React logo' },
    { src: viteLogo, alt: 'Vite logo' },
    { src: twinLogo, alt: 'Twin macro logo' },
  ];
  const links = [
    { text: 'Learn React', url: 'https://reactjs.org' },
    { text: 'Vite Docs', url: 'https://vitejs.dev/guide' },
    { text: 'twin.macro', url: 'https://github.com/ben-rogerson/twin.macro' },
  ];

  return (
    <main
      css={[
        tw`flex flex-col items-center justify-center`,
        tw`min-h-screen`,
        tw`text-lg text-center`,
      ]}
    >
      <div tw="flex items-center mb-8">
        {logos.map((logo, index) => (
          <Fragment key={logo.alt}>
            <img
              src={logo.src}
              alt={logo.alt}
              tw="mx-4 h-[15vmin] xs:h-[20vmin] pointer-events-none"
            />
            {index + 1 !== logos.length && <p tw="text-xl xs:text-4xl">+</p>}
          </Fragment>
        ))}
      </div>
      <Button clickAction={() => history.push('/docs')} color="blue">
        See Docs
      </Button>
      <div tw="mt-6 flex">
        {links.map((link, index) => (
          <Fragment key={link.text}>
            <Anchor url={link.url} isExternal>
              {link.text}
            </Anchor>
            {index + 1 !== links.length && <p>|</p>}
          </Fragment>
        ))}
      </div>
    </main>
  );
};

export default Home;
