const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = data => {
    if (data === "\u0003") {
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
