const mongoose = require('mongoose');
const Student = require(`${__dirname}/../models/student-model`);
require('dotenv').config({path: `${__dirname}/../.env`});

mongoose.connect(process.env.DATABASE, () => {
    console.log('DB connected');
});

function getStudents(){
    Student.find({})
    .then(students => {
        console.log('Successfully fetched students');
        console.log(students);
    })
    .catch(() => console.log("No data"));
}
// getStudents();

function getStudentByName(name = 'Ido'){
    Student.find({name})
    .then(students => {
        console.log('Successfully fetched students');
        console.log(students);
    })
    .catch(() => console.log("No data"));
}
// getStudentByName();

function getCourseStudents(course = 'Law'){
    Student.find({ courses: { $in: [course] } })
    .then(students => {
        console.log('Successfully fetched students');
        console.log(students);
    })
    .catch(() => console.log("No data"));
}

// getCourseStudents();

function getCourseStudentsAndGender(course = 'Java', gender = 'Female'){
    Student.find({ 
        gender,
        courses: { $in: [course] },
    })
    .then(students => {
        console.log('Successfully fetched students');
        console.log(students);
    })
    .catch(() => console.log("No data"));
}
// getCourseStudentsAndGender()

// function getStudentsBornAfter(birth = )
