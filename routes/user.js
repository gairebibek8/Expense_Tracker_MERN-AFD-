const express = require('express');
const router = express.Router();
const { getUser, addUser, deleteUser } = require('../controllers/user');

router
  .route('/')
  .get(getUser)
  .post(addUser);

router
  .route('/:id')
  .delete(deleteUser);

module.exports = router;