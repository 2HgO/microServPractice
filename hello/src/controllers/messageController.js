'use strict'

const status = require('http-status');
const Message = require('../models/messageModel');

exports.index = async (req, res) => {
    Message.aggregate([{ $sample: { size: 1 } }]).exec((err, message) => {
        if (err) {
            return res.status(status.NOT_FOUND).json({
                message: err,
            })
        }
        res.status(status.OK).json({
            message: "got the message",
            data: message,
        });
    });
};

exports.new = async (req, res) => {
    let message = new Message();
    message.message = req.body.message ? req.body.message : message.message;
    message.author = req.body.author;

    message.save((err) => {
        if (err) {
            return res.status(status.BAD_REQUEST).json({
                status: status.NOT_IMPLEMENTED,
                message: err,
            });
        }
        res.status(status.OK).json({
            message: "message added to pool",
            data: message,
        });
    });
};

exports.view = async (req, res) => {
    let person = req.params.name
    res.status(status.OK).json({
        message: "we made it bro",
        data: `Welcome to our inspiration website ${person}`,
    });
};

exports.error = async (req, res) => {
    res.status(status.NOT_FOUND).json({
        message: "whoops! you're not allowed here"
    });
};