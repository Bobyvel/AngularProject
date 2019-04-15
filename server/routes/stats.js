const express = require('express')
const Ads = require('../models/Ads');
const User = require('../models/User');

const router = new express.Router()

router.get('/', (req, res) => {
  Ads.find({}).then((ads) => {
    User.find({}).then((users) => {
      return res.status(200).json({
        ads: ads.length,
        users: users.length
      })
    })
  })
})

module.exports = router
