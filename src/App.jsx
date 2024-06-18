import './App.css';
import { reqToGroqAi } from "./utils/groq";
import { useState } from 'react';
import { Light as SyntaxHighlight } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const ai = await reqToGroqAi(content.value);
    setData(ai);
    setLoading(false);
  };

  return (
    <main className='flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto'>
      <h1 className='text-4xl text-indigo-500'>code.ai</h1>
      <form className='flex flex-col gap-4 py-4 w-full'>
        <input 
          placeholder='Ketik Prompt Disini....'
          className='py-2 px-4 text-md rounded-md'
          id='content'
          type='text'
        />
        <button 
          onClick={handleSubmit}
          type='button'
          className='bg-indigo-500 py-2 px-4 font-bold text-white rounded-md'>Send
        </button>
      </form>
      <div className='max-w-xxl w-full mx-auto'>
        {loading ? (
          <div className="loader"></div>
        ) : (
          data && (
            <SyntaxHighlight 
              language='swift' 
              style={darcula} 
              wrapLongLines={true}
            >
              {data}
            </SyntaxHighlight>
          )
        )}
      </div>
    </main>
  );
}

export default App;
