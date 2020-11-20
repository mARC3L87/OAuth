const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  if(!req.user) {
    res.redirect('/user/no-permission');
  } else{
    res.render('logged', { name: req.user.displayName, avatar: req.user._json.picture });
    console.log(req.user)
  }
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  if(!req.user) {
    res.redirect('/user/no-permission');
  } else {
    res.render('profile');
  }
});

router.get('/profile/settings', (req, res) => {
  if(!req.user) {
    res.redirect('/user/no-permission');
  } else {
    res.render('settings');
  }
});

module.exports = router;