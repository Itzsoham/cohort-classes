import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    if (socket) {
      const message = inputRef.current?.value;
      if (!message) return;
      socket.send(message);
    }
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (event) => {
      console.log(event.data);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Ping Pong</h2>
      </header>
      <input ref={inputRef} type="text" placeholder="Enter your shit..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
