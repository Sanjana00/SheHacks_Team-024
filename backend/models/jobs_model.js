const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Jobs = new Schema({
	company_name:{type: String},
	location:{type: String},
	type_of_work: {type: String},
	field:{type:String},
	level_of_experience:{type : String},
	about_the_company:{type: String},
	hiring_process:{type: String},
	hours_per_week:{type: Number},
	duration:{type: String},
    applicants:[{name: {type: String, required: "Please enter your name" },
    email: {type: String, required: true},
    phone: {type: Number, required: "Enter contact number"},
    university: {type: String, required: "Please enter the name of the university you graduated from"},
    major_field: { type: String, required: true},
    passout_year: { type: Number , required: true},
    university_cgpa:{ type: Number, required: " Enter your cgpa on a scale of 10 "},
    resume:{type:String, required: true},
    transcript:{type:String, required: true}
    }]
})

module.exports = mongoose.model('Jobs', Jobs);

