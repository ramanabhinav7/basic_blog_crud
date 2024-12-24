module.exports = {
    generateToken: (user) => {
        const jwt = require('jsonwebtoken');
        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
            expiresIn: '5h',
        });
        return token;
    },

    verifyToken: (token) => {
        const jwt = require('jsonwebtoken');
        const secretKey = process.env.JWT_SECRET;
        try {
            return jwt.verify(token, secretKey);
        } catch (error) {
            return null;
        }
    }
};