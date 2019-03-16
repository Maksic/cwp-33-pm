'use strict'

const siege = require('siege');

siege()
    .on(3000)
    .concurrent(50)
    .for(120).seconds
    .get("/hash")
    .attack();
