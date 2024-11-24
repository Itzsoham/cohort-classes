import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// wss.on("connection", function connection(ws) {
//   ws.on("error", console.error);
//   console.log("connected");
//   ws.send("done");

//   //   ws.on("message", function message(data, isBinary) {
//   //     wss.clients.forEach(function each(client) {
//   //       if (client.readyState === WebSocket.OPEN) {
//   //         client.send(data, { binary: isBinary });
//   //       }
//   //     });
//   //   });
// });

wss.on("connection", function connection(ws) {
  ws.on("message", (e) => {
    console.log(e.toString());
    if (e.toString() === "ping") {
      ws.send("poning");
    }
  });
});
