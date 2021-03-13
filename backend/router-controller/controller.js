import mongoose from 'mongoose'; 
const Job = require('../models/jobs_model.js')
const {check,validation}= require('express-validator');

exports.getJobs = (req, res) => {		
Job.find({duration: req.body.duration , location:req.body.location, type_of_work:req.body.type_of_work, level_of_experience: req.body.level_of_experience, hours_per_week: req.body.hours_per_week }, (err, jobs) => {
        if (err) {
            res.send(err);
        }
        res.json(jobs);
    });
  } ;  	
exports.putUser = (req, res) => {		return res.status(200).send("Function working");		}  	
