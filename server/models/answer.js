'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    content: DataTypes.STRING,
    author: DataTypes.INTEGER
  });
  Answer.associate = function (models) {
    Answer.hasMany(models.AnswerVote)
  }
  return Answer;
};
