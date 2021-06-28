const router = require('express').Router(); //eslint-disable-line
const personController = require('../controllers/Person')

router.get(
  '/persons/:id',
  personController.getPerson
);

module.exports = router;