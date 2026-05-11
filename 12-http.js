const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        return res.end('Welcome to Home Page');
    }
    if(req.url==="/about"){
        return res.end('About Page');
    }
    res.end(`<h1>Page not found</h1>`);
});

server.listen(5000);

