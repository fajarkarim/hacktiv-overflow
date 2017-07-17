'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: {
        args: false,
        msg: "email cannot null"
      },
      validate: {
        isEmail: {
          args: true,
          msg: "email is not valid"
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "username has been used"
      },
      validate: {
        len: {
          args: [1,10],
          msg: "username must between 1 - 10 character"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
      validate: {
        isIn: {
          args: [['user', 'admin']],
          msg: "role is not defined"
        }
      }
    }
  });
  User.associate = function (models) {
    User.hasMany(models.Question, { foreignKey: 'author' })
    User.hasMany(models.Answer, { foreignKey: 'author' })
    User.hasMany(models.QuestionVote, { foreignKey: 'voter'})
    User.hasMany(models.AnswerVote, { foreignKey: 'voter'})
  }
  return User;
};
