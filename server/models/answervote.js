'use strict';
module.exports = function(sequelize, DataTypes) {
  var AnswerVote = sequelize.define('AnswerVote', {
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    voter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AnswerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  AnswerVote.associate = function (models) {
    AnswerVote.belongsTo(models.User, { foreignKey: 'voter'})
    AnswerVote.belongsTo(models.Answer)
  }
  return AnswerVote;
};
