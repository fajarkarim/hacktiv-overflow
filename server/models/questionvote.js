'use strict';
module.exports = function(sequelize, DataTypes) {
  var QuestionVote = sequelize.define('QuestionVote', {
    type: DataTypes.STRING,
    voter: DataTypes.INTEGER,
    QuestionId: DataTypes.INTEGER
  });

  QuestionVote.associate = function (models) {
    QuestionVote.belongsTo(models.Question)
  }
  return QuestionVote;
};
