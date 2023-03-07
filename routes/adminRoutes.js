const express = require('express')
const router = express.Router()
const {addPhone, getPhones, getPhone, deletePhone} = require('../controllers/controllers')

router.route("/phone")
    .post(addPhone)
    .get(getPhones)

router.route("/phone/:id")
    .get(getPhone)
    .delete(deletePhone)

module.exports = router