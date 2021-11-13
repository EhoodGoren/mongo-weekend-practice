const mongoose = require('mongoose');
const User = require(`${__dirname}/../models/user`);
const Post = require(`${__dirname}/../models/post`);
const Comment = require(`${__dirname}/../models/comment`);
require('dotenv').config({path: `${__dirname}/../.env`});

mongoose.connect(process.env.DATABASE, () => {
    console.log('DB connected');
});

function getUsers(){
    User.find({})
    .then(users => {
        console.log('Successfully fetched users');
        console.log(users);
    })
    .catch(() => console.log('No data'));
}
// getUsers()

function getPosts(){
    Post.find({})
    .then(posts => {
        console.log('Successfully fetched posts');
        console.log(posts);
    })
    .catch(() => console.log('No data'));
}
// getPosts();

function getPostsByAuthor(author){
    Post.find({username: author})
    .then(posts => {
        console.log('Successfully fetched posts');
        console.log(posts);
    })
    .catch(() => console.log('No data'));
}
// getPostsByAuthor('GoodGuyGreg');
// getPostsByAuthor('ScumbagSteve');
