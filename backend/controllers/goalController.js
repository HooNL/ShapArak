// Get Goals
// Get /api/goals
// Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get all goals' })
}

// Set Goals
// POST /api/goals
// Private
const setGoal = (req, res) => {

  if (!req.body.text) {
      res.status(400)
      throw new Error('Please write a string') 
  }

  res.status(200).json({
    message: 'Set een post',
  })
  console.log('De text is added');
}

// Put Goals
// Update /api/goals/:id
// Private
const putGoal = (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  })
}

// Delete Goals
// Delete /api/goals/:id
// Private
const delGoal = (req, res) => {
  res.status(200).json({
    message: `Delete a goal ${req.params.id}`,
  })
}

module.exports = {
  getGoals,
  setGoal,
  putGoal,
  delGoal,
}
