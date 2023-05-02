const express = require('express');
const router = express.Router();
require('dotenv').config()
const Message = require("../models/message")


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

async function fetchMessages(){
  const fetchedMessages = await Message.find()
  for (const message of fetchedMessages){
    messages.push(message)
  }
}

fetchMessages()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get("/new", function(req, res, next){
  res.render("form")
})

router.post("/new", async function(req, res, next){
  const {name, message } = req.body
  const newMessage = new Message(
    {text: message, user: name, added: new Date()}
  )
  await newMessage.save()
  messages.push(newMessage)
  res.redirect("/")
})

router.use(function(req, res, next){
  res.render(error)
})

module.exports = router;
