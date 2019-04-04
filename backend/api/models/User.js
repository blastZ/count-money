module.exports = {
  tableName: 'user',
  attributes: {
    id: {
      type: 'string',
      columnName: '_id',
      autoIncrement: true
    },
    name: {
      type: 'string',
      columnName: 'name'
    },
    password: {
      type: 'string',
      columnName: 'password'
    },
    deleted: {
      type: 'boolean',
      columnName: 'deleted'
    }
  }
};
