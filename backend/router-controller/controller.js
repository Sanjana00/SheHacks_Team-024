import mongoose from 'mongoose'; 
const Job = require('../models/jobs_model.js')
const {check,validation}= require('express-validator');

exports.getJobs = (req, res) => {																	//fetch jobs as per specifications provided in requst body
Job.find({location:req.body.location, type_of_work:req.body.type_of_work, field:req.body.field}, (err, jobs) => {
        if (err) {
            res.send(err);
        }
        res.send(jobs);
    });
  } ;  	
exports.putUser = (req, res) => {	
let User={																											//create user object to be pushed to array of applicants from request data
	"name": req.body.name, 
	"email": req.body.email,
    "phone": req.body.phone,
    "university": req.body.university,
    "major_field": req.body.major_field,
    "passout_year": req.body.passout_year,
    "university_cgpa": req.body.university_cgpa,
    "resume": req.body.resume,
    "transcript": req.body.transcript
}
Job.findOneAndUpdate(
{company_name: req.body.company_name},
{ $push: { applicants: User }}
).then(data => {																							
      if (!data) {																										//if company doesn't exist with given company_name, display error
        res.status(404).send({
          message: `Cannot push user. Maybe chosen company doesnt have vacancies'`
        });
      } else {
      console.log(data);																				
      res.status(201).send({ message: "User was added successfully." })}
    })
    .catch(err => {
      res.status(404).send({message: "Error updating database" });
    });
    }  	
