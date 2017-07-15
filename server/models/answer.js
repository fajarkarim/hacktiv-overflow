'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    author: DataTypes.INTEGER,
    content: DataTypes.STRING,
    answer_vote: DataTypes.INTEGER
  });

  Answer.assosiate = function (models) {
    Answer.belongsTo(models.User)
    Answer.hasMany(models.Vote, {foreignKey: 'answer_vote'})
  }
  return Answer;
};
