const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Here's where we should return an error response
    res.status(404).send('User not found');
  } else {
    res.send(user);
  }
});