import ReactLogo from '@/assets/svgs/react_logo.svg?react';
import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <ReactLogo className="animate-spin-slow mb-6 h-32 w-32" />
      <header className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          Welcome to Rsbuild + React
        </h1>
        <p className="mb-6 text-gray-700">
          Edit <code className="rounded bg-gray-200 px-1">App.tsx</code> and
          save to reload.
        </p>
        <div className="card mb-6 rounded-lg bg-white p-6 shadow-md">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-700">
            Rsbuild is a fast JavaScript and TypeScript bundler for modern web
            development.
          </p>
        </div>
        <p className="text-gray-500">
          Learn more about Rsbuild by visiting the official documentation.
        </p>
        <p className="mt-4 text-blue-500">
          Click the button above to start exploring Rsbuild with React.
        </p>
      </header>
    </div>
  );
};
