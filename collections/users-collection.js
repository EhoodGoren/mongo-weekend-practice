const mongoose = require('mongoose');
const User = require(`${__dirname}/../models/user`);
require('dotenv').config({path: `${__dirname}/../.env`});

const usersList = [
    {
        username: 'GoodGuyGreg',
        first_name : 'Good Guy',
        last_name : 'Greg'
    },
    {
        username : 'ScumbagSteve',
        first_name : 'Scumbag',
        last_name : 'Steve'
    }
];


mongoose.connect(process.env.DATABASE, () => {
    console.log('DB connected');
});

User.insertMany(usersList)
.then(() => console.log('Saved!'))
.catch(() => console.log('Saving failed'));

