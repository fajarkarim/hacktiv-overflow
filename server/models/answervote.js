'use strict';
module.exports = function(sequelize, DataTypes) {
  var AnswerVote = sequelize.define('AnswerVote', {
    type: DataTypes.STRING,
    voter: DataTypes.INTEGER,
    AnswerId: DataTypes.INTEGER
  });
  return AnswerVote;
};
