'use strict'

const router = require('express').Router();
const messageController = require('../controllers/messageController');

router.route('/')
    .get(messageController.index)
    .post(messageController.new)
    .delete(messageController.error)
    .put(messageController.error)

router.route('/:name')
    .get(messageController.view)
    .post(messageController.error)
    .put(messageController.error)
    .delete(messageController.error)

module.exports = router;