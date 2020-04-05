module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    date: {
      type: DataTypes.DATEONLY, 
      allowNull: false, 
      validate: {
        isDate: true,
        isAfter: "2020-03-01",
        isBefore: "2020-09-30"
      }
    },
    h_team: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      } 
    }, 
    v_team: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      } 
    } 
  });
  return Game;
};
