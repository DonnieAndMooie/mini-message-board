const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)

const Schema = mongoose.Schema

const messageSchema = new Schema({
  text: {type: String, required: true},
  user: {type: String, required: true},
  added: {type: Date, required: true, default: new Date()}
})

module.exports = mongoose.model("messages", messageSchema)