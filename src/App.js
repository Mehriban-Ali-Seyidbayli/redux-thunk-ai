import { useState } from "react";
import ChatAi from "./components/chatAi";
import ImageAi from "./components/imageAi";


function App() {
  const [isChatMode, setIsChatMode] = useState(true);

  const handleClick = () => {
    setIsChatMode(!isChatMode);
  }

  return (
    <div className="chat-bot">
      <h1>AI App</h1>
      <button onClick={handleClick}>
        {
          isChatMode ? "Turn to Image Mode" : "Turn to Chat Mode"
        }
      </button>
      {
        isChatMode ? <ChatAi /> : <ImageAi />
      }
    </div>
  );
}

export default App;
