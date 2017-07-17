'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    content: DataTypes.STRING,
    author: {
      type: DataTypes.INTEGER
    },
    QuestionId: DataTypes.INTEGER
  });
  Answer.associate = function (models) {
    Answer.hasMany(models.AnswerVote)
    Answer.belongsTo(models.User, { foreignKey: 'author' })
  }
  return Answer;
};
