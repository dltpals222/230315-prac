const http = require('http');


// function baseHtml (...contentBody) { `
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     </head>
//     <body>
//         <div id="root"></div>
//         ${contentBody}
//     </body>
//     </html>
//     `
    
// }

// function bodyScript (...contentScript) {
//     `<script> ${contentScript} </script>`
// }


// const jshttpMarkup =` 
// import { tagMake } from './examModule';
// const root = document.getElementById('root');
// tagMake(root,'div',1)
// `


const rePage = require('./rq.js')

const server = http.createServer(function(request, response){
    console.log(request.method);
    if(request.method === 'GET' && request.url === '/'){
        response.writeHead(200,{'content-tpye':'text/html'});
        // let page = baseHtml(bodyScript(jshttpMarkup));
        response.write(rePage);
        response.end();
    }
})

server.listen(2023,function(error){
    if(error){
        console.error('서버 안돌아감')
    } else {
        console.log('잘 돌아간다 서버')
    }
})