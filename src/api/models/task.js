module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    },
  }, {
    sequelize,
    modelName: 'Task',
  });

  return Task;
};
