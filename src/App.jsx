import 'twin.macro';
import { useState } from 'react';

import logo from './logo.svg';
import CustomLink from './components/CustomLink';
import CustomButton from './components/CustomButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div tw="text-center">
      <header tw="flex flex-col items-center justify-center min-h-screen bg-[#282c34] text-gray-50 text-lg">
        <img
          src={logo}
          alt="React logo"
          tw="h-[40vmin] pointer-events-none motion-safe:animate-spin-slow"
        />
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
      </header>
    </div>
  );
}

export default App;
