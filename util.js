const jwt = require ('jsonwebtoken');

//require('dotenv').config();
//const secret = process.env.JWT_SECRET;

const getToken = (user) => {
    return jwt.sign(user.toJSON(), 'secret', {
        expiresIn: '2h'
    })
}

module.exports = getToken;