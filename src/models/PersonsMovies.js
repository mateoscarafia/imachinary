module.exports = (sequelize, type) => {
  return sequelize.define('PersonsMovies', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: type.INTEGER,
    },
    roleId: {
      type: type.INTEGER,
      references: {
        model: 'Role',
        key: 'id',
      }
    },
    personId: {
      type: type.INTEGER,
      references: {
        model: 'Person',
        key: 'id',
      }
    },
    movieId: {
      type: type.INTEGER,
      references: {
        model: 'Movie',
        key: 'id',
      }
    },
  });
}