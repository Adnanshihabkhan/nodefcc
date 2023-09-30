const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is the out short history of our about us page");
  }

  {
    res.end(`
    <h1>OOPS!</h1>
    <p>sorry  we can seem to find the page you are looking for </p>
    <a href = '/'> back to home </a>
    `);
  }
});
server.listen(5000);
