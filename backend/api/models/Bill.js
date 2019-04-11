module.exports = {
  tableName: 'bill',
  attributes: {
    id: {
      columnName: '_id',
      type: 'string',
      autoIncrement: true
    },
    userId: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
    value: {
      type: 'number'
    },
    info: {
      type: 'string'
    },
    createdAt: {
      type: 'ref',
      autoCreatedAt: true
    },
    updatedAt: {
      type: 'ref',
      autoUpdatedAt: true
    },
    deleted: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
