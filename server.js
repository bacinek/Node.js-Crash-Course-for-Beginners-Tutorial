// const http = require("http");

// const HOSTNAME = process.env.HOSTNAME || "localhost";
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-Type", "text/plain");
//   response.end("Hellow World");
// });

// server.listen(PORT, HOSTNAME, () => {
//   console.log(`Server running at http://${HOSTNAME}: ${PORT}/`);
// });

// console.log(__filename);
// console.log(__dirname);

// const [readFile, readFileSync] = require("fs");

// try {
//   const data = fs.readFileSync("hi.txt", "utf8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// console.log("Log from outside");

// Read to file

// const { writeFile, writeFileSync } = require("fs");
// const newContent = "This is some new text";

// writeFile("hi.txt", newContent, { flag: "a" }, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
// });
// console.log("Content Written");

// const { error } = require("console");
// const { appendFile } = require("fs");

// const newContent = "\nThis is some more new text";

// appendFile("hi.txt", newContent, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Content Written");
// });

// Renaming and Deleting Files

// const { rename } = require("fs");
// rename("hi.txt", "hello.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File renamed");
// });

// Deleting

// const { unlink } = require("fs");
// unlink("hello.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File deleted");
// });

// Exporting and importing

// import { addNums } from "./addNums.js";

// const sum = addNums(2, 2);

// console.log(sum);

const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;

      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;

      break;
    default:
      path += "404.html";
      res.statusCode = 404;

      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
