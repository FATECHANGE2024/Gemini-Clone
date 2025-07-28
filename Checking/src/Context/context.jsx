import { createContext,useContext,useState } from 'react';
import runChat from '../config/config.js';

const Context = createContext();

export const ContextProvider = ({children}) => {

  const onSent = async (prompt) => {
    await runChat(prompt);
  }

  onSent();
  

  // const [prompt, setPrompt] = useState('');
  // const [response, setResponse] = useState('');

  // const onSent = async (prompt) => {
  //   try {
  //     const res = await fetch('http://localhost:8000/generate', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ prompt }),
  //     });

  //     const data = await res.json();
  //     setResponse(data.response);
  //   } catch (err) {
  //     console.error("Error:", err);
  //   }
  // };

  // useEffect(() => {
  //   onSent("what is react");
  // }, []);


  // const contextValue = {
  //   // prompt,
  //   // setPrompt,
  //   // response,
  //   // onSent,
  // };
  const [messages, setMessages] = useState([]);

    const addMessage = (msg) => {
      setMessages(prev => [...prev, msg]);
    };

  return (
    <Context.Provider value={{ messages, addMessage }}>
      {children}
    </Context.Provider>
  );
};
export const useChat = () => useContext(Context);
export default ContextProvider;










//NEW CODE

// import { createContext, useContext, useState } from 'react';

// const ChatContext = createContext();

// export const ChatProvider = ({ children }) => {
//   const [messages, setMessages] = useState([]);

//   const addMessage = (msg) => {
//     setMessages(prev => [...prev, msg]);
//   };

//   return (
//     <ChatContext.Provider value={{ messages, addMessage }}>
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const useChat = () => useContext(ChatContext);
                  