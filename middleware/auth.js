require('dotenv').config();
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    try {
    
        const token = req.header('x-auth-token');

        if(!token)
            return res
                .status(401)
                .json({ msg: 'Sin token, autorizacion denegada'});

            
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if(!decode)
            return res
            .status(401)
            .json({ msg: 'Token invalido, autorizacion denegada'});

        res.user = decode.id;
        next();

    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

module.exports = auth;