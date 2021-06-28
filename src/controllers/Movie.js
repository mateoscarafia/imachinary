module.exports = {
  getMovies: async (req, res, next) => {
    req.db.PersonsMovies.findAll({
      attributes: ['createdAt', 'updatedAt'],
      include: [{
        attributes: ['name'],
        model: req.db.Role,
      }, {
        attributes: ['name'],
        model: req.db.Person,
      }, {
        attributes: ['title'],
        model: req.db.Movie,
      }],
    }).then(data => {
      res.send(data)
    }).catch(err => {
      if (err) next(err)
    })
  },
  getMovie: async (req, res, next) => {
    req.db.PersonsMovies.findAll({
      attributes: ['createdAt', 'updatedAt'],
      where: {
        MovieId: req.params.id
      },
      include: [{
        attributes: ['name'],
        model: req.db.Role,
      }, {
        attributes: ['name'],
        model: req.db.Person,
      }, {
        attributes: ['title'],
        model: req.db.Movie,
      }],
    }).then(data => {
      res.send(data)
    }).catch(err => {
      if (err) next(err)
    })
  }
}