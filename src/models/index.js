const Sequelize = require('sequelize');

const MovieModel = require('./Movie')
const PersonModel = require('./Person')
const RoleModel = require('./Role')
const PersonsMoviesModel = require('./PersonsMovies')

const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect:'mysql'
})

const Movie = MovieModel(sequelize, Sequelize)
const Person = PersonModel(sequelize, Sequelize)
const Role = RoleModel(sequelize, Sequelize)
const PersonsMovies = PersonsMoviesModel(sequelize, Sequelize)

Movie.hasMany(PersonsMovies)
PersonsMovies.belongsTo(Movie)
Person.hasMany(PersonsMovies)
PersonsMovies.belongsTo(Person)
Role.hasMany(PersonsMovies)
PersonsMovies.belongsTo(Role)

module.exports = {
  Movie,
  Person,
  Role,
  PersonsMovies
}

