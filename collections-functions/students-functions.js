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