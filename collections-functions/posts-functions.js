const mongoose = require('mongoose');
const Post = require(`${__dirname}/../models/post`);
require('dotenv').config({path: `${__dirname}/../.env`});


mongoose.connect(process.env.DATABASE, () => {
    console.log('DB connected');
});

function getPostIdByTitle(title){
    return Post.findOne({ title })
    .then(post => {
        console.log('Successfully fetched post');
        return post.id;
    })
    .catch(() => console.log('No data'));
}

module.exports = getPostIdByTitle;
