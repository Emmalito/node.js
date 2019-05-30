/*          Creer une requete

var fs = require('fs');
var https = require('https');


var option = {
    hostname: 'fr.wikipedia.org',
    port: 443,
    path: '/wiki/Node.js',
    method: 'GET'
};


var req = https.request(option, (res) =>{
    var responseBody = '';
    console.log('START');
    console.log(res.statusCode);
    console.log(res.headers);

    res.setEncoding('UTF-8');

    res.on('data', (chunk)=>{
        console.log(chunk);
        responseBody += chunk;
    });

    res.on('end',()=>{
        //console.log(responseBody);
        fs.writeFile('nodejs.html', responseBody, ()=>{
            console.log('File created');
        });
    });
});

req.on('error', (err)=>{
    console.log(err);
});

req.end();

---------------------------------------------------------------------------

            Creer un serveur  

var fs = require('fs');
var http = require('http');

var server = http.createServer((req,res)=>{
    res.writeHead(200, {'Context-type': 'text/html'});

    var responseBody = `
    <html>
        <head>
        </head>
        <body>
            <h1>Je suis un server HTTP mais pas HTTPS :)</h1>
            <p>${req.url}</p>
            <p>${req.method}</p>
        </body>
    </html>
    `;

    //res.end('Je suis un server HTTP mais pas HTTPS :)');
    res.end(responseBody);
});

server.listen(3000);
console.log('server on  http://localhost:3000');

---------------------------------------------------------------------------

Servir des fichiers  

var fs = require('fs');
var http = require('http');
var path = require('path');

var server = http.createServer((req,res)=>{
    console.log(`${req.method} : request for ${req.url}`);

    if (req.url === '/'){
        fs.readFile('./public/index.html', 'UTF-8', (err,html)=>{
            res.writeHead(200, {'Content-type':'text/html'});
            res.end(html);
        });

    }
    else if (req.url.match(/.css$/)){
        var csspath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(csspath, 'UTF-8');
        res.writeHead(200, {'Content-type':'text/css'});
        fileStream.pipe(res);
    } 
    else{
        res.writeHead(404, {'Content-type':'text/plain'});
        res.end('404 not found');
    }

});

server.listen(3000);

console.log('server on  http://localhost:3000');

---------------------------------------------------------------------------

Utiliser un JSON  

var fs = require('fs');
var http = require('http');
var data = require('./data/data.json');

var globalRes;

var server = http.createServer((req,res)=>{
    globalRes = res;
    if(req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/json'});
        res.end(JSON.stringify(data));
    }else if (req.url.match(/is-active$/)){
        isActive();
    }else{
        res.end('not found');
    }  
});

function isActive(){
    var isActive = data.filter((item) =>{
        return item.isActive === true;
    });

    globalRes.end(JSON.stringify(isActive));
}

server.listen(3000);

console.log('server on  http://localhost:3000');

---------------------------------------------------------------------------

Récupérer des données POST */

var fs = require('fs');
var http = require('http');

var globalRes;

var server = http.createServer((req,res) =>{
    globalRes = res;

    if(req.method === 'GET'){
        fs.readFile('./public/index.html', 'UTF-8', (err,html)=>{
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.end(html);
        });
    }else if (req.method === 'POST'){
        var body ='';

        req.on('data', (chunk)=>{
            console.log(chunk);
            body += chunk;            
        });

        req.on('end', ()=>{
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.end(`
                ${body}
            `);
        })
    }
});

server.listen(3000);

console.log('server on  http://localhost:3000');