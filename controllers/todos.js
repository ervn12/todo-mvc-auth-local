const Todo = require('../models/Todo')

module.exports = {
 getMorningTodos: async (req, res) => {
  console.log(req.user)
  try {
   const todoItems = await Todo.find({ userId: req.user.id })
   const morningItemsLeft = await Todo.countDocuments({ userId: req.user.id, completed: false, isMorning: true })
   res.render('morningTodos.ejs', { todos: todoItems, user: req.user, morningLeft: morningItemsLeft, })
  } catch (err) {
   console.log(err)
  }
 },
 getNightTodos: async (req, res) => {
  console.log(req.user)
  try {
   const todoItems = await Todo.find({ userId: req.user.id })
   const nightItemsLeft = await Todo.countDocuments({ userId: req.user.id, completed: false, isNight: true })
   res.render('nightTodos.ejs', { todos: todoItems, user: req.user, nightLeft: nightItemsLeft, })
  } catch (err) {
   console.log(err)
  }
 },
 createMorningTodo: async (req, res) => {
  try {
   await Todo.create({ todo: req.body.todoItem, completed: false, userId: req.user.id, isNight: false, isMorning: true })
   console.log('Todo has been added!')
   res.redirect('/todos/morningTodos')
  } catch (err) {
   console.log(err)
  }
 },
 createNightTodo: async (req, res) => {
  try {
   await Todo.create({ todo: req.body.todoItem, completed: false, userId: req.user.id, isNight: true, isMorning: false })
   console.log('Todo has been added!')
   res.redirect('/todos/nightTodos')
  } catch (err) {
   console.log(err)
  }
 },
 markComplete: async (req, res) => {
  try {
   await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
    completed: true
   })
   console.log('Marked Complete')
   res.json('Marked Complete')
  } catch (err) {
   console.log(err)
  }
 },
 markIncomplete: async (req, res) => {
  try {
   await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
    completed: false
   })
   console.log('Marked Incomplete')
   res.json('Marked Incomplete')
  } catch (err) {
   console.log(err)
  }
 },
 deleteTodo: async (req, res) => {
  console.log(req.body.todoIdFromJSFile)
  try {
   await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
   console.log('Deleted Todo')
   res.json('Deleted It')
  } catch (err) {
   console.log(err)
  }
 },
 resetTodo: async (req, res) => {
  try {
   await Todo.updateMany({ _id: req.body.todoIdFromJSFile }, {
    completed: false
   })
   console.log('reset')
   res.json('reset')
  } catch (err) {
   console.log(err)
  }
 }
}
