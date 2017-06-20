const massive = require 'massive';
const express = require 'express';
const db = massive.connectSync({
  connectionString : "postgres://postgres:mikhail4@localhost:3002/postgres"
});
const app = module.exports = express();

app.get('/allposts', (req, res, next) => {
  db.run('select * from blog', (err, database) => {
    res.send(database);
  });
});

app.listen(3002, () => {console.log('listening on port 3002')});
