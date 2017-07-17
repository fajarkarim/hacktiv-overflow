'use strict';
module.exports = function(sequelize, DataTypes) {
  var AnswerVote = sequelize.define('AnswerVote', {
    type: DataTypes.STRING,
    voter: DataTypes.INTEGER,
    AnswerId: DataTypes.INTEGER
  });
  AnswerVote.associate = function (models) {
    AnswerVote.belongsTo(models.User, { foreignKey: 'voter'})
    AnswerVote.belongsTo(models.Answer)
  }
  return AnswerVote;
};
