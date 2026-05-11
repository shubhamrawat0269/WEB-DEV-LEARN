import http from "http";

const ab = new ArrayBuffer(7);
const uInt8Array = new Uint8Array(ab);

uInt8Array[0] = 0x53;
uInt8Array[1] = 0x68;
uInt8Array[2] = 0x75;
uInt8Array[3] = 0x62;
uInt8Array[4] = 0x68;
uInt8Array[5] = 0x61;
uInt8Array[6] = 0x6d;

startServer(uInt8Array);

function startServer(responseData) {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/txt; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url === "/favicon.ico") {
      res.end();
      return;
    }
    res.end(responseData);
  });

  server.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
  });
}