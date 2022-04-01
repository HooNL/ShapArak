const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  putGoal,
  delGoal,
} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(delGoal).put(putGoal)

module.exports = router
