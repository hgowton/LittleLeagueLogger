module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define("user", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    coach: DataTypes.BOOLEAN,
    team: DataTypes.STRING
  });
  return user;
};

module.exports = function (sequelize, DataTypes) {
  var game = sequelize.define("game", {
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    home_team: DataTypes.STRING,
    away_team: DataTypes.STRING
  });
  return game;
};

module.exports = function(sequelize, DataTypes) {
  var scores = sequelize.define("scores", {
    h1_score: DataTypes.INTEGER,
    v1_score: DataTypes.INTEGER,
    h2_score: DataTypes.INTEGER,
    v2_score: DataTypes.INTEGER,
    h3_score: DataTypes.INTEGER,
    v3_score: DataTypes.INTEGER,
    h4_score: DataTypes.INTEGER,
    v4_score: DataTypes.INTEGER,
    h5_score: DataTypes.INTEGER,
    v5_score: DataTypes.INTEGER,
    h6_score: DataTypes.INTEGER,
    v6_score: DataTypes.INTEGER,
    h_overtime: DataTypes.INTEGER,
    v_overtime: DataTypes.INTEGER
  });
  return scores;
};
