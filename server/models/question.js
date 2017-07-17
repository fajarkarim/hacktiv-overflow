'use strict';
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    author: DataTypes.INTEGER
  });
  Question.associate = function (models) {
    Question.hasMany(models.QuestionVote)
  }
  return Question;
};
