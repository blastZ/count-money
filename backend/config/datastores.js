module.exports.datastores = {
  default: {
    adapter: 'sails-mongo',
    url: `mongodb://blastz:${
      process.env.DATABASE_PASSWORD
    }@cluster0-shard-00-00-d9poo.mongodb.net:27017,cluster0-shard-00-01-d9poo.mongodb.net:27017,cluster0-shard-00-02-d9poo.mongodb.net:27017/count_money?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`,
    ssl: true
  }
};
