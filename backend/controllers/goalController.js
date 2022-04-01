const Goal = require('../models/goalModel')

// Get Goals
// Get /api/goals
// Private
const getGoals = async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)
}

// Set Goals
// POST /api/goals
// Private
const setGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please write a string')
  }
  const goal = await Goal.create({
    text: req.body.text,
  })

  res.status(200).json(goal)
  console.log('De new text is added ' + goal.text)
}

// Put Goals
// Update /api/goals/:id
// Private
const putGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal niet gevonden')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGoal)
}

// Delete Goals
// Delete /api/goals/:id
// Private
const delGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal niet gevonden')
  }

  // My way
  const deletGoal = await Goal.findByIdAndRemove(req.params.id)
  res.status(200).json(deletGoal)

  // Brad way
 /*  await goal.remove()
  res.status(200).json({ id: req.params.id }) */
}

module.exports = {
  getGoals,
  setGoal,
  putGoal,
  delGoal,
}
