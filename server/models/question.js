'use strict';
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    author: DataTypes.INTEGER,
    question_vote: DataTypes.INTEGER
  });
  Question.associate = function (models) {
    Question.belongsTo(models.User, {foreignKey: 'author'})
    // Question.hasMany(models.Vote, {foreignKey: 'question_vote'})
  }
  return Question;
};
