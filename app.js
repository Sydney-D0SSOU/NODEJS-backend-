const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const stuffrouter = require ('../backend/routes/stuff');
const stuffCtrl = require('../backend/controllers/stuff');


 const db_url = 'mongodb+srv://strong123:strong123@cluster0.ixgvyv9.mongodb.net/?retryWrites=true&w=majority '
 mongoose.connect(db_url)
.then((result)=>{
  console.log('BDD CONNECTER');
})
.catch((err)=>{
  console.log(err);

})

 const app = express()
const port = 3000 ;
app.listen(port, () => {
  console.log(`SERVEUR EN ECOUTE SUR LE PORT : ${port}`)
})
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(bodyparser.json());
  app.use('/api/stuff', stuffrouter);
  module.exports =app ;