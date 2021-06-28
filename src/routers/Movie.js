
const router = require('express').Router(); //eslint-disable-line
const movieController = require('../controllers/Movie')

router.get(
  '/movies',
  movieController.getMovies
);

router.get(
  '/movies/:id',
  movieController.getMovie
);

module.exports = router;