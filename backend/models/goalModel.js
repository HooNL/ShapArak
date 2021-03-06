const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a string for text field'],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Goal', goalSchema)
