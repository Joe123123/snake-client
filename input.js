const { SAY, MOVE } = require("./constants");
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = data => {
    if (data === "\u0003") {
      process.exit();
    }
    switch (data) {
      case "w":
        connection.write(MOVE.W);
        break;
      case "s":
        connection.write(MOVE.S);
        break;
      case "a":
        connection.write(MOVE.A);
        break;
      case "d":
        connection.write(MOVE.D);
        break;
      case "q":
        connection.write(SAY.Q);
        break;
      case "e":
        connection.write(SAY.E);
        break;

      default:
        break;
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
