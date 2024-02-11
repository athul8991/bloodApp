const mongoose =require('mongoose');

mongoose.connect(`${process.env.DB_URL}/bloodDb`).then(()=>{
    console.log('connect');
}).catch(err=>{
    console.log(err);
})