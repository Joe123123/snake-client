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
        connection.write("Move: up");
        break;
      case "s":
        connection.write("Move: down");
        break;
      case "a":
        connection.write("Move: left");
        break;
      case "d":
        connection.write("Move: right");
        break;
      case "q":
        connection.write("Say: OnYourLeft");
        break;
      case "e":
        connection.write("Say: OnYourRight");
        break;

      default:
        break;
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
