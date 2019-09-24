'use strict'

const mongoose = require('mongoose');

let MessageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
});

//let Message = 
module.exports = mongoose.model('message',MessageSchema);

//module.exports.get = (callback, limit) => Message.find(callback).limit(limit);