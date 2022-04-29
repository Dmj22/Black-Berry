const router = require('express').Router();
const { createNewNote } = require('../lib/notes');
const  newNotes  = require('../Develop/db/db.json');
const { uniUUID } = require('../uuid')


router.get('/notes', (req, res) => {
  let results = newNotes ;
  if (results) {
    res.json(results);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
  req.body.id = uniUUID();
    const notes = createNewNote(req.body, newNotes);
    res.json(notes);
  
});

module.exports = router;