module.exports = function (sequelize, DataTypes) {
  var Scores = sequelize.define(
    "Score",
    {
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      h1_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      v1_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      h2_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      v2_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      h3_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      v3_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      h4_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      v4_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      h5_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      v5_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      h6_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      v6_score: {
        type: DataTypes.INTEGER,
        validate: {
          max: 20,
        },
      },
      h_overtime: {
        type: DataTypes.INTEGER,
      },
      v_overtime: {
        type: DataTypes.INTEGER,
      },
      created_at: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updated_at: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
    }
  );
  return Scores;
};
