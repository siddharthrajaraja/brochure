var express =require('express')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app=express()
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));

const {first,second}=require('./getroutes.js')

app.get('/first',first);
app.get('/second',second);


app.listen( process.env.PORT || 1500)

