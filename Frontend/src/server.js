const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // You can use any port you want

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a schema for User
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  mobile: String
});

// Create a User model
const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/register', (req, res) => {
  const { username, email, password, mobile } = req.body;

  // Create a new user instance
  const newUser = new User({
    username,
    email,
    password,
    mobile
  });

  // Save the user to the database
  newUser.save((err) => {
    if (err) {
      res.status(500).send('Error registering new user');
    } else {
      res.status(200).send('User registered successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
