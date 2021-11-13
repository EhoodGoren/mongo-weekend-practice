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

function getStudentsBornAfter(birth = new Date('05-05-1998')){
    Student.find({ birth: { $gt: birth } })
    .then(students => {
        console.log('Successfully fetched students');
        console.log(students);
    })
    .catch(() => console.log("No data"));
}
// getStudentsBornAfter();

function getAreaCodeStudents(code = '054'){
    Student.find({ phone: {$regex: `^${code}`} })
    .then(students => {
        console.log('Successfully fetched students');
        console.log(students);
    })
    .catch(() => console.log("No data"));
}

getAreaCodeStudents();
