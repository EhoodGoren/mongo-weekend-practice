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
// getAreaCodeStudents();

function addCourseToStudent(course = 'Javascript', name = 'Yahalom'){
    Student.updateMany({ name, courses: { $nin: [course] } }, { $push: {courses: course } } )
    .then(() => {
        console.log('Successfully updated students');
        getStudentByName(name);
    })
    .catch(() => console.log("No data"));
}
// addCourseToStudent();

function updateBirthOfStudent(birth = new Date('12-02-1998'), name = 'Koren'){
    Student.updateMany({ name }, { birth } )
    .then(() => {
        console.log('Successfully updated students');
        getStudentByName(name);
    })
    .catch(() => console.log("No data"));
}
// updateBirthOfStudent();

function getStudentsByOneLetter(letter = 'o'){
    Student.find({ name: { $regex: `(?i)${letter}` } })
    .then(students => {
        console.log('Successfully fetched students');
        console.log(students);
    })
    .catch(() => console.log("No data"));
}
// getStudentsByOneLetter();

function getStudentsByLetters(letters = ['h', 'y']){
    Student.find({
        $or: [
            { surName: { $regex: `(?i)${letters[0]}` } },
            { surName: { $regex: `(?i)${letters[1]}` } }
        ]
    })
    .then(students => {
        console.log('Successfully fetched students');
        console.log(students);
    })
    .catch(() => console.log("No data"));
}
// getStudentsByLetters();

function deleteStudentByName(name = 'Ido'){
    Student.deleteMany({ name })
    .then(() => {
        console.log('Successfully deleted students');
    })
    .catch(() => console.log("No data"));
}
// deleteStudentByName();

function deleteStudentByBirth(birth = new Date('04-02-1998')){
    Student.deleteMany({ birth })
    .then(() => {
        console.log('Successfully deleted students');
    })
    .catch(() => console.log("No data"));
}
// deleteStudentByBirth();
