const express = require('express');
const app = express();
const port =3000;
const bodyParser= require('body-Parser');
const { response } = require('express');
const urlEncodedParser =bodyParser.urlencoded({extended:false})

app.set('views', 'views');
app.set('view engine','hbs');
app.use(express.static('public'));

// app.get('/', function(request ,response){
//     response.render('home',{name:'Chelsea Kerubo'});
//  });

app.get('/', function(request ,response){
    response.render('contact_us');
});

app.post('/process-contacts', urlEncodedParser, function (request, response){
    response.end('Thank you ' + request.body.first_name + ' '+ request.body.last_name);
    
    
});

app.listen(port);
console.log('server is listening at port 3000');



// var http =require('http');
// var port =3000;

// var requestHandler =function(request, response){
//     console.log(request.url);
//     response.end('Hello from Node Server');
// }

// var server =http.createServer(requestHandler);
// server.listen(port);

// console.log('Node server started on port 3000');