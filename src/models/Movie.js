

module.exports = (sequelize, type) => {
  return sequelize.define('Movies', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: type.NUMBER,
    },
    title: type.STRING,
    movie_year: type.INTEGER
  });
}
