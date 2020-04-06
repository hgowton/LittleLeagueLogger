module.exports = function (sequelize, DataTypes) {
  var Scores = sequelize.define("Scores", {
    h1_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    },
    v1_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    },
    h2_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    },
    v2_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    },
    h3_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    },
    v3_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    },
    h4_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    },
    v4_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    },
    h5_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    },
    v5_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    },
    h6_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    },
    v6_score: {
      type: DataTypes.INTEGER,
      validate: {
        max: 20
      }
    }
  });
  return Scores;
};
