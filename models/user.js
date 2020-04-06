module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        //QUESTION -- not sure on the validations and unique pieces -- based on how we would like usernames to be formated
        unique: true,
        validate: {
            isEmail: true,
            len: [5, 75]
        }
      },
      password: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          len: [8, 32],
          is: ["^[a-z]+$",'i']
        }
      },
      coach: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }, 
      team: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          len: [1]
        }
      } 
    });
    return User;
  };
  