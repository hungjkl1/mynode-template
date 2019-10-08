const express = require('express');
const router = express.Router();
router.get('/hello',(req,res) => {
  return res.status(200).json({
    data:'hello world'
  })
})
router.get('/getData',(req,res) => {
  const {name, birthDay} = req.body;
  return res.status(200).json({
    name,
    birthDay
  })
})
module.exports = router