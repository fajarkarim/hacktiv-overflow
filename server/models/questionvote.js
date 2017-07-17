'use strict';
module.exports = function(sequelize, DataTypes) {
  var QuestionVote = sequelize.define('QuestionVote', {
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    voter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    QuestionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  QuestionVote.associate = function (models) {
    QuestionVote.belongsTo(models.Question)
  }
  return QuestionVote;
};
