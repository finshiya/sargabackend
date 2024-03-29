// collection.js (payment schema)

const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({

  orders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
  },
  recieptId:{
    type: String,
    required: true,
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  nextContactDate: {
    type: String,
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;

