import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState<string[]>(["hi", "hello"]);
  const [room, setRoom] = useState<string>("");

  const [userMessage, setUserMessage] = useState<string>("");

  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      const parsedMessage = JSON.parse(event.data);
      if (parsedMessage.type === "message") {
        setMessages((prev) => [...prev, parsedMessage.payload.message]);
      }
    };
    wsRef.current = ws;

    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <div>
        <div className="mb-5">
          <h1>Chat App</h1>
        </div>
        <input
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className="p-2.5 mr-5 rounded-md"
          placeholder="Enter room"
        />
        <button
          onClick={() => {
            if (wsRef.current) {
              wsRef.current.send(
                JSON.stringify({
                  type: "join",
                  payload: {
                    room: room,
                  },
                })
              );
            }
          }}
        >
          Enter room{" "}
        </button>
      </div>
      <div className="flex mt-5 flex-col gap-3 justify-between p-2 border rounded-md border-gray-300">
        <div></div>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="p-2.5 rounded-md"
          placeholder="Enter message"
        />
        <button
          onClick={() => {
            if (wsRef.current) {
              wsRef.current.send(
                JSON.stringify({
                  type: "message",
                  payload: {
                    message: userMessage,
                    room: room,
                  },
                })
              );
            }
          }}
        >
          Send message
        </button>
        {messages.map((message) => {
          return (
            <input
              key={message}
              type="text"
              className="p-2.5 rounded-md"
              value={message}
              disabled
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
