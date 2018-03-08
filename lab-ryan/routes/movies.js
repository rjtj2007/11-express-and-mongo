'use strict';
const express = require('express');
const router = express.Router();
const Movies = require('../models/movies.js');

router.get('/', (req, res) => {
    if(req.query.id) {
        Movies.findOne({_id: req.query.id})
        .then((results) => {
            console.log('FOUND:', results);
            res.send(results)
        });
    } else {
        Movies.find()
        .then(results => {
            console.log('FOUND:', results);
            console.log('FOUND TOTAL:', results.length);
            res.send(results);
        });
    }
});

//check get routes first then refactor post, put and del

// router.post('/', (req, res) => {
//     let movies = {
//         name: req.body.name,
//         date: req.body.date,
//         rating: req.body.rating,
//     };

//     movies.save(movies)
//     .then(movies => {
//         res.status(200);
//         res.send(movies);
//     })
// });

// router.put('/', (req, res) => {
//     let id = req.query.id;
//     movies.get(id)
//     .then(movies => {
//         if(req.body.name){
//             movies.name = req.body.name;
//         }
//         if(req.body.date){
//             movies.date = req.body.date;
//         }
//         if(req.body.rating){
//             movies.rating = req.body.rating;
//         }
//         movie.save((err, movies) => {
//             res.send(movies);
//         })
//     });
// });

// router.delete('/', (req, res) => {
//     let id = req.query.id;
//     movies.remove(id)
//     .then(movies => {
//         res.send(movies);
//     });
// });


module.exports = router;