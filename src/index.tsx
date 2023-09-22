import * as esbuild from 'esbuild-wasm';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

const container = document.getElementById('root');
const root = createRoot(container!);

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm',
    });
  };

  const onClick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea onChange={(e) => setInput(e.target.value)}></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

root.render(<App />);
