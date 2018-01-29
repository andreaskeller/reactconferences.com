const { createServer } = require("http");

const STATUS = parseInt(process.env.STATUS, 10) || 301;
const PORT = parseInt(process.env.PORT, 10) || 80;

createServer((req, res) => {
  const Location = "https://awesomereact.com/conferences";
  res.writeHead(STATUS, { Location });
  res.end();
}).listen(PORT);
