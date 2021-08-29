import 'twin.macro';
import { useState } from 'react';

import CustomLink from './components/CustomLink';
import logo from './logo.svg';

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
        <div tw="flex items-center">
          <button
            type="button"
            tw="my-4 py-2 px-4 bg-red-500 rounded hover:bg-red-600"
            onClick={() => setCount((count) => count - 1)}
          >
            -
          </button>
          <p tw="mx-4">{count}</p>
          <button
            type="button"
            tw="my-4 py-2 px-4 bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => setCount((count) => count + 1)}
          >
            +
          </button>
        </div>
        <p>
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
