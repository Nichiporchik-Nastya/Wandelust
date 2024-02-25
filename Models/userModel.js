const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://user:root@localhost:8080/Wanderlust');

const User = sequelize.define('User', {
  // Определение полей модели
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // ...
  }
});

// Создание нового пользователя
User.create({ firstName: 'John', lastName: 'Doe' })
  .then(user => {
    console.log(user.toJSON());
  });

// Поиск пользователей
User.findAll({ where: { lastName: 'Doe' } })
  .then(users => {
    console.log(users.map(user => user.toJSON()));
  });