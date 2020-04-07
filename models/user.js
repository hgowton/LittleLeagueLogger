module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          len: [5, 75],
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 32],
          is: ["^[a-z]+$", "i"],
        },
      },
      coach: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      team: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
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
  return User;
};
