const express = require('express');
const router = express.Router();
var qpp = express();
const Student = require('../models/student');


//get a list of students from the DB
router.get('/students/:id', function(req, res, next){
  Student.find({studentID: req.params.id}).then(function(students){
    res.send(students);
  });
});

//add a new student to the DB
router.post('/students', function(req, res, next){
  Student.create(req.body).then(function(student){
    res.send(student);
  }).catch(next);
});

//update a student in the DB
router.put('/students/:id', function(req, res, next){
  Student.update({studentID: req.params.id}, req.body).then(function(student){
    Student.findOne({'studentID': parseInt(req.params.id)}).then(function(student){
      res.send(student);
    });
  });
});

//delete a student from the DB
router.delete('/students/:id', function(req, res, next){
  Student.remove({studentID: req.params.id}).then(function(student){
    res.send(student);
  });
});

module.exports = router;
