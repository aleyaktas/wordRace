const express = require("express");
const router = express.Router();
const PrivateWord = require('../models/PrivateWord');
const auth = require('../middleware/auth');

// POST api/privateWord/addWord
// Add word for my words page
// Private 
router.post('/addWord', auth, async (req, res) => {
  const { wordEn, wordTr } = req.body
  try {
   let word = new PrivateWord({
    user: req.user.id,
    tr: wordTr,
    en: wordEn
   })
   await word.save()
   res.send(word)
  }catch(err) {
    console.log(err.message);
    res.status(500).send('Server error')
  }
})

// POST api/privateWord/deleteWord
// Delete word for my words page
// Private
router.delete('/deleteWord', auth, async (req,res) => {
  const { wordId } = req.body
  try {
    let word = await PrivateWord.findById(wordId) 
    if(!word) {
      return res.status(404).json({ msg:'Word not found' });
    }
    await word.remove();
    res.send("Word deleted")
  }catch(err) {
    console.log(err.message);
    res.status(500).send('Server error')
  }
})

module.exports = router;
