import mongoose from 'mongoose'; 
const Job = require('../models/jobs_model.js')
const {check,validation}= require('express-validator');

exports.getJobs = (req, res) => {		
Job.find({}, (err, jobs) => {
        if (err) {
            res.send(err);
        }
        res.json(jobs);
    });
  } ;  	
exports.putUser = (req, res) => {		return res.status(200).send("Function working");		}  	
