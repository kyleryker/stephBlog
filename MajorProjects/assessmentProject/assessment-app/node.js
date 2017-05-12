const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const React = require('react');
let connectionString = "postgres://postgres:mikhail4@localhost/postgres";
const app = module.exports = express();
const cors = require('cors');

app.use(cors());

let massiveInstance = massive.connectSync({connectionString: connectionString})
app.set('db', massiveInstance);

let db = app.get('db');

app.use(bodyParser.json());

app.use(express.static('build'))

app.get('/movies', (req, res, next) => {
  db.run('select * from movies', (err, movieTable) => {
if (err){console.log(err)}
res.json(movieTable)
})
});

app.get('/ratings', (req, res, next) => {
  db.run('select * from ratings', (err, ratingsTable) => {
    if (err){console.log(err)}
    res.json(ratingsTable)
  })
});

app.get('/full', (req, res, next) => {
  db.run('select * from movies m join ratings r on m.movieId = r.id', (err, table) => {
    if(err){console.log(err)}
res.json(table)
  })
});

app.put('/edit/rating', (req, res, next) => {
  db.ratings.update({id:req.body.id, rating:req.body.rating}, (err, change) =>{
    if(err){console.log(err)}
      res.json(change)
  })
});

app.post('/add/rating', (req, res, next) => {
   db.ratings.insert({id: req.body.id, rating: req.body.rating}, (err, newRow) => {
     if(err){console.log(err)}
       res.json(newRow)
   })
});

app.post('/add/movie', (req, res, next) => {
  db.movies.insert({movieid: req.body.movieid, movie: req.body.movie}, (err, newMovie) =>{
    if (err){console.log(err)}
      res.json(newMovie)
  })
});

app.delete('/delete/rating', (req, res, next) => {
  db.ratings.destroy({id: req.body.id}, (err, removed) => {
    if(err){console.log(err)}
    res.json(removed)
  })
});

app.delete('/delete/movie', (req, res, next) => {
  db.movies.destroy({movieid: req.body.movieid}, (err, removed) => {
    if(err){console.log(err)}
    res.json(removed)
  })
});

app.listen(3000, () => console.log('listening on port 3000'))
