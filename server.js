const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:hung431998@wazza-shopping-vrrga.mongodb.net/admin?retryWrites=true&w=majority', {useNewUrlParser: true});

app.use(express.urlencoded({extended: false}));
// app.use(express.json());

app.use('/api/test',require('./components/test'))
app.listen(3222, ()=>{
  console.log(`Listening on port: 3222`)
})