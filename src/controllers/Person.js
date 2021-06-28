module.exports = {
  getPerson: async (req, res, next) => {
    req.db.PersonsMovies.findAll({
      attributes: ['createdAt', 'updatedAt'],
      where: {
        PersonId: req.params.id
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