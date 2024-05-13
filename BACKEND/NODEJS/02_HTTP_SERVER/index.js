const http = require("http");
var url = require("url");
const PORT = 8081;

/* ++++++++
 Assessment No. #1 --> /student?name=Abhishek&age=50&prof=army --> return user information in format like
 My name is Abhishek. I am 50 years old and my profession is Army
  +++++++++
*/

const server = http.createServer((req, res) => {
  const reqURL = url.parse(req.url, true);
  console.log(reqURL);
  // console.log(req.method);
  switch (reqURL.pathname) {
    case "/":
      res.end("Home");
      break;

    case "/student": {
      const { name, age, prof } = reqURL.query;
      res.end(
        `My name is ${name}. I am ${age} years old and my profession is ${prof}`
      );
      break;
    }

    // below code can't work in normal http
    // case "/student/:sId": {
    //   res.end("student with id");
    //   break;
    // }

    default:
      res.end("Error Page");
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server started at PORT NUMBER ${PORT}`);
});
