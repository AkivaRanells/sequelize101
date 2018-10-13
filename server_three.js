var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://sql7260485:jX2nX1md7W@sql7.freesqldatabase.com:3306/sql7260485');;

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

// sequelize.sync().then(function() {
//   return User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
// })


User.findOne({where:{username: "janedoe"}}).then(u=>console.log(u.get({plain: true})));
