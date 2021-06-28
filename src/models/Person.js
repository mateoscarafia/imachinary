module.exports = (sequelize, type) => {
  return sequelize.define('Persons', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: type.INTEGER,
    },
    name: type.STRING,
    lastName: type.STRING,
    age: type.INTEGER,
  });
}
