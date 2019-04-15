const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({
   title: {
    type: mongoose.Schema.Types.String,
    required: true
  },  
  description: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  image: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  contact: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Ads = mongoose.model('Ads', adsSchema);

module.exports = Ads;
