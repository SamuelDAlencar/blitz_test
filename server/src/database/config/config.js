require('dotenv').config();

module.exports = {
  'development': {
    'username': process.env.DB_USER || 'root',
    'password': process.env.DB_PASSWORD || 'tdp1503',
    'database': 'TasksManager',
    'host': process.env.DB_HOST || 'localhost',
    'dialect': 'mysql',
    'port': Number(process.env.DB_PORT) || 3306
  },
  'test': {
    'username': process.env.DB_USER || 'root',
    'password': process.env.DB_PASSWORD || 'tdp1503',
    'database': 'TasksManager',
    'host': process.env.DB_HOST || 'localhost',
    'dialect': 'mysql',
    'port': Number(process.env.DB_PORT) || 3306
  },
  'production': {
    'username': process.env.DB_USER || 'root',
    'password': process.env.DB_PASSWORD || 'tdp1503',
    'database': 'TasksManager',
    'host': process.env.DB_HOST || 'localhost',
    'dialect': 'mysql',
    'port': Number(process.env.DB_PORT) || 3306
  }
};
