'use strict'

const express = require('express');
const bcrypt = require('bcryptjs');
const uuidv4 = require('uuid/v4');

const app = express();
const port = process.env.PORT || 3000;

app.get('/hash',(req,res)=>{
    bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(uuidv4(), salt, (err, hash) => {
			res.send(hash);
		});
    });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}...`) ;
});

// pm2 delete all
// pm2 start index.js -i max
// pm2 stop 'all'
// npm uninstall -g pm2