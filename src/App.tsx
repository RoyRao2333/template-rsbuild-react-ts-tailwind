import ReactLogo from '@/assets/svgs/react_logo.svg?react';
import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ReactLogo className="w-32 h-32 animate-spin-slow mb-6" />
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Rsbuild + React
        </h1>
        <p className="text-gray-700 mb-6">
          Edit <code className="bg-gray-200 px-1 rounded">App.tsx</code> and
          save to reload.
        </p>
        <div className="card bg-white p-6 rounded-lg shadow-md mb-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-gray-700 mt-4">
            Rsbuild is a fast JavaScript and TypeScript bundler for modern web
            development.
          </p>
        </div>
        <p className="text-gray-500">
          Learn more about Rsbuild by visiting the official documentation.
        </p>
        <p className="text-blue-500 mt-4">
          Click the button above to start exploring Rsbuild with React.
        </p>
      </header>
    </div>
  );
};
