module.exports = function (sequelize, DataTypes) {
  var Game = sequelize.define(
    "Game",
    {
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      in_progress: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
     
      home_team: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      away_team: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Game;
};