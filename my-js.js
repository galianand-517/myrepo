const http = require('http');
const url = require('url');
const fs = require('fs');


const secretKey = "mySuperSecretKey123";


http.createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query;

   
    if (queryObject.name) {
        res.write(`<h1>Hello ${queryObject.name}</h1>`);
    }

   
    if (queryObject.file) {
        fs.readFile(queryObject.file, (err, data) => {
            if (err) {
                res.write("File not found!");
            } else {
                res.write(data);
            }
            res.end();
        });
    } else {
        res.end("No file requested.");
    }
}).listen(8080);

console.log("Server running at http://localhost:8080/");
