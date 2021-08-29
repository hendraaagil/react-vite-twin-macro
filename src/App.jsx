import 'twin.macro';
import { Fragment, useState } from 'react';

import reactLogo from './assets/react-logo.png';
import twinLogo from './assets/twin-logo.png';
import viteLogo from './assets/vite-logo.svg';
import CustomLink from './components/CustomLink';
import CustomButton from './components/CustomButton';

function App() {
  const [count, setCount] = useState(0);
  const logos = [
    { src: reactLogo, alt: 'React logo' },
    { src: viteLogo, alt: 'Vite logo' },
    { src: twinLogo, alt: 'Twin macro logo' },
  ];

  return (
    <main tw="flex flex-col items-center justify-center min-h-screen bg-[#282c34] text-gray-50 text-lg text-center">
      <div tw="flex items-center mb-4">
        {logos.map((logo, index) => (
          <Fragment key={logo.alt}>
            <img
              src={logo.src}
              alt={logo.alt}
              tw="mx-4 h-[20vmin] pointer-events-none"
            />
            {index + 1 !== logos.length && <p tw="text-4xl">+</p>}
          </Fragment>
        ))}
      </div>
      <p>Hello React + Vite + twin.macro!</p>
      <div tw="flex items-center mt-4">
        <CustomButton
          clickAction={() => setCount((count) => count - 1)}
          color="red"
        >
          -
        </CustomButton>
        <p tw="mx-4">{count}</p>
        <CustomButton
          clickAction={() => setCount((count) => count + 1)}
          color="blue"
        >
          +
        </CustomButton>
      </div>
      <CustomButton
        clickAction={() => setCount(0)}
        color="emerald"
        padding="wide"
        type="reset"
      >
        Reset
      </CustomButton>
      <p tw="mt-4">
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <div tw="flex">
        <CustomLink text="Learn React" url="https://reactjs.org" />
        {' | '}
        <CustomLink
          text="Vite Docs"
          url="https://vitejs.dev/guide/features.html"
        />
        {' | '}
        <CustomLink
          text="twin.macro"
          url="https://github.com/ben-rogerson/twin.macro"
        />
      </div>
    </main>
  );
}

export default App;
