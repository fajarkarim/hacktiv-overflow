'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  });
  User.associate = function (models) {
    User.hasMany(models.Question, { foreignKey: 'author' })
    User.hasMany(models.Answer, { foreignKey: 'author' })
    User.hasOne(models.QuestionVote, { foreignKey: 'voter'})
    User.hasOne(models.AnswerVote, { foreignKey: 'voter'})
  }
  return User;
};
