'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    QuestionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Answer.associate = function (models) {
    Answer.hasMany(models.AnswerVote)
    Answer.belongsTo(models.User, { foreignKey: 'author' })
  }
  return Answer;
};
