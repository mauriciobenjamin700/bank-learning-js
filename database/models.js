const { Sequelize, DataTypes } = require('sequelize');

// Cria uma instância do Sequelize conectando ao SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'mydatabase.db'
});

// Define um modelo User
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sincroniza o banco de dados e insere um usuário
sequelize.sync().then(() => {
  return User.create({
    name: 'John Doe'
  });
}).then(user => {
  console.log(user.toJSON());
});
