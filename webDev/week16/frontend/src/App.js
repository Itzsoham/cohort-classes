"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
function App() {
    const [socket, setSocket] = (0, react_1.useState)(null);
    const inputRef = (0, react_1.useRef)(null);
    function sendMessage() {
        var _a;
        if (socket) {
            const message = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value;
            if (!message)
                return;
            socket.send(message);
        }
    }
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);
        ws.onmessage = (event) => {
            console.log(event.data);
        };
    }, []);
    return (<div className="App">
      <header className="App-header">
        <h2>Ping Pong</h2>
      </header>
      <input ref={inputRef} type="text" placeholder="Enter your shit..."/>
      <button onClick={sendMessage}>Send</button>
    </div>);
}
exports.default = App;
