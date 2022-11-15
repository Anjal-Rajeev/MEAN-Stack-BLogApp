const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const app = new express();
const path = require('path');
app.use(express.static('./dist/Frontend'));
require('./middlewares/mongoDB') 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logger('dev'));


const api = require('./routes/api')
app.use('/api',api)



app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});
   


app.listen(5000, ()=>{
    console.log('----------Server is running on port 5000----------------')
}) 