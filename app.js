require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path =require('path')
require('./conn');

const adminRoute = require('./routes/adminRoutes');
const utileRoute = require('./routes/utileRoutes')

const port = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'))
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.use('/admin',adminRoute);
// app.use('/auth');
// app.use('/addData');
app.use('/utile',utileRoute);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,`/views/index.html`))
})



app.listen(port,()=>{
    console.log(`Server @${port}`);
})