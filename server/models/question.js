'use strict';
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1,160],
          msg: "max 160 character"
        }
      }
    },
    content: DataTypes.STRING,
    author: DataTypes.INTEGER
  });
  Question.associate = function (models) {
    Question.hasMany(models.Answer)
    Question.hasMany(models.QuestionVote)
    Question.belongsTo(models.User, { foreignKey: 'author' })
  }
  return Question;
};
