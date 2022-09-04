const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
 todo: {
  type: String,
  required: true,
 },
 completed: {
  type: Boolean,
  required: true,
 },
 userId: {
  type: String,
  required: true
 },
 isNight: { 
     type: Boolean,
     required: true,
 },
 isMorning: { 
    type: Boolean,
    required: true,
}
})

// const TodoNtSchema = new mongoose.Schema({
//  todo: {
//   type: String,
//   required: true,
//  },
//  completed: {
//   type: Boolean,
//   required: true,
//  },
//  userId: {
//   type: String,
//   required: true
//  }
// })

module.exports = mongoose.model('Todo', TodoSchema)

// module.exports = mongoose.model('Todo', TodoNtSchema)

