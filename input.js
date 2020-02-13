const { SAY, MOVE } = require("./constants");
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  let myInterval, preKey;
  let directions = {
    W: "vertical",
    S: "vertical",
    A: "horizontal",
    D: "horizontal"
  };
  const move = key => {
    if (directions[preKey] !== directions[key]) {
      clearInterval(myInterval);
      myInterval = setInterval(() => connection.write(MOVE[key]), 50);
      preKey = key;
    }
  };
  const handleUserInput = data => {
    if (data === "\u0003") {
      process.exit();
    }

    switch (data) {
      case "w":
        move("W");
        break;
      case "s":
        move("S");
        break;
      case "a":
        move("A");
        break;
      case "d":
        move("D");
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
