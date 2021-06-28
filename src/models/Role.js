module.exports = (sequelize, type) => {
  return sequelize.define('Roles', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: type.NUMBER,
    },
    name: type.STRING
  });
}
