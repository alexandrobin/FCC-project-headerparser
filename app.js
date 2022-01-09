var express = require('express');
var app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204


// SOLUTION

app.get('/api/whoami', function (req,res){
  console.log(req.ip)
  let IP = req.ip 
  let language = req.headers["accept-language"]
  let software = req.headers['user-agent']
  console.log({IP,language,software})
  res.json({IP, language, software})
})

module.exports = app


// TODO
/*You should provide your own project, not the example URL.

A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.

A request to /api/whoami should return a JSON object with your preferred language in the language key.

A request to /api/whoami should return a JSON object with your software in the software key.*/