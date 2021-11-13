const mongoose = require('mongoose');
const Post = require(`${__dirname}/../models/post`);
require('dotenv').config({path: `${__dirname}/../.env`});

const postsList = [
    {
        username : 'GoodGuyGreg',
        title : 'Passes out at party',
        body : 'Wakes up early and cleans house'
    },
    {
        username : 'GoodGuyGreg',
        title : 'Steals your identity',
        body : 'Raises your credit score',
    },
    {
        username : 'GoodGuyGreg',
        title : 'Reports a bug in your code',
        body : 'Sends you a Pull Request',
    },
    {
        username : 'ScumbagSteve',
        title : 'Borrows something',
        body : 'Sells it',
    },
    {
        username : 'ScumbagSteve',
        title : 'Borrows everything',
        body : 'The end'
    },
    {
        username : 'ScumbagSteve',
        title : 'Forks your repo on github',
        body : 'Sets to private',
    }
];


mongoose.connect(process.env.DATABASE, () => {
    console.log('DB connected');
});

Post.insertMany(postsList)
.then(() => console.log('Saved!'))
.catch(() => console.log('Saving failed'));

