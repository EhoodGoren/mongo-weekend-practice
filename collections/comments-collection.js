const mongoose = require('mongoose');
const Comment = require(`${__dirname}/../models/comment`);
const Post = require(`${__dirname}/../models/post`);
const getPostIdByTitle = require(`${__dirname}/../collections-functions/posts-functions`);
require('dotenv').config({path: `${__dirname}/../.env`});

const commentsList = [
    {
        username : 'GoodGuyGreg',
        comment : 'Hope you got a good deal!',
        post : 'Borrows something'
    },
    {
        username : 'GoodGuyGreg',
        comment : "What's mine is yours!",
        post : 'Borrows everything'
    },
    {
        username : 'GoodGuyGreg',
        comment : "Don't violate the licensing agreement!",
        post : 'Forks your repo on github'
    },
    {
        username : 'ScumbagSteve',
        comment : "It still isn't clean",
        post : 'Passes out at party'
    },
    {
        username : 'ScumbagSteve',
        comment : 'Denied your PR cause I found a hack',
        post : 'Reports a bug in your code'
    }
];

function setPostsIds(){
    return new Promise((resolve, reject) =>
        commentsList.forEach((comment, index, commentsArray) => {
            getPostIdByTitle(comment.post).then(postId => {
                comment.post = postId;
                if(index === commentsArray.length-1) resolve();
            })
        })
    )
}

mongoose.connect(process.env.DATABASE, () => {
    console.log('DB connected');
});

setPostsIds().then(() => {
    Comment.insertMany(commentsList)
    .then(() => console.log('Saved!'))
    .catch(() => console.log('Saving failed'));
})
