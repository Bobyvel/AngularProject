const express = require('express')
const authCheck = require('../middleware/auth-check');
const Ads = require('../models/Ads');

const router = new express.Router()

function validateAdsForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.price = parseInt(payload.price)

  if (!payload || typeof payload.title !== 'string' || payload.title.length < 3) {
    isFormValid = false
    errors.title = 'Title must be more than 3 symbols.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10) {
    isFormValid = false
    errors.description = 'Description must be more than 10 symbols.'
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.price = 'Price must be a positive number.'
  }

  if (!payload || typeof payload.image !== 'string' || payload.image.length === 0) {
    isFormValid = false
    errors.image = 'Image URL is required.'
  }

  if (!payload || typeof payload.contact !== 'string') {
    isFormValid = false
    errors.contact = 'Contact must be provided.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const ads = req.body
  ads.creator = req.user._id
  const validationResult = validateAdsForm(ads)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Ads.create(ads)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Ad added successfully.',
        ads
      })
    })
})

router.get('/all', (req, res) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search

  Ads.find({})
    .then((ads) => {
      return res.status(200).json(ads)
    })
})

router.get('/details/:id', (req, res) => {
  const id = req.params.id
  Ads.findById(id)
    .then((ads) => {
      if (!ads) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: ads.title,
        description: ads.description,
        price: ads.price,
        image: ads.image,
        contact: ads.contact
      }

      
      res.status(200).json(response)
    })
})


router.get('/mine', authCheck, (req, res) => {
  const user = req.user._id

  Ads.find({creator: user})
    .then((ads) => {
      return res.status(200).json(ads)
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user._id

  Ads.findById(id)
    .then((ad) => {
      if (!ad) {
        return res.status(200).json({
          success: false,
          message: 'Ad does not exists!'
        })
      }

      if ((ad.creator.toString() != user && !req.user.roles.includes("Admin"))) {
         return res.status(401).json({
           success: false,
           message: 'Unauthorized!'
         })
      }

      Ads.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Ad deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const ad = req.body;

  if (!ad) {
    return res.status(404).json({
      success: false,
      message: 'Ad does not exists!'
    })
  }

  if (!req.user.roles.includes('Admin')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
    })
  }

  const validationResult = validateAdsForm(ad)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Ads.findByIdAndUpdate(id, ad)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Ad edited successfully!'
      })
  })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Ads.findById(id)
    .then(ads => {
      if (!ads) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        title: ads.title,
        description: ads.description,
        price: ads.price,
        image: ads.image,
        contact: ads.contact
      }

      res.status(200).json(response)
    })
})

module.exports = router
