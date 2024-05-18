import http from "http";

export const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ data: "It works!!" }));
});

server.listen(3000, () => {
  console.log(`We are running on port: 3000`);

  console.log("jdjdjssd");
});
