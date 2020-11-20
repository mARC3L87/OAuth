const express = require('express');
const router = express.Router();

router.get('/user/logged', (req, res) => {
  res.render('logged');
});

router.get('/user/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;