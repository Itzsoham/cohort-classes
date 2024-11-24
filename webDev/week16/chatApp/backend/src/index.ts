import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

// let allSockets: WebSocket[] = [];
// let userCount = 0;
// wss.on("connection", (socket) => {
//   allSockets.push(socket);

//   userCount++;
//   console.log(`User count: ${userCount}`);

//   socket.on("message", (e) => {
//     console.log(`Received: ${e.toString()}`);
//     socket.send(`You sent: ${e.toString()}`);

//     allSockets.forEach((s) => {
//       if (s !== socket) {
//         s.send(`Someone sent: ${e.toString()}`);
//       }
//     });
//   });

//   socket.on("disconnect", () => {
//     userCount--;
//     console.log(`User count: ${userCount}`);
//     allSockets = allSockets.filter((s) => s !== socket);
//   });
// });

let allSockets: User[] = [];

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message.toString());
    if (parsedMessage.type === "join") {
      allSockets.push({
        socket,
        room: parsedMessage.payload.room,
      });
    }

    if (parsedMessage.type === "message") {
      allSockets.forEach((user) => {
        if (user.room === parsedMessage.payload.room) {
          user.socket.send(
            JSON.stringify({
              type: "message",
              payload: {
                message: parsedMessage.payload.message,
              },
            })
          );
        } else {
          user.socket.send(
            JSON.stringify({
              type: "message",
              payload: {
                message: "You are not in this room, join and try again",
              },
            })
          );
        }
      });
    }
  });

  socket.on("disconnect", () => {});
});
