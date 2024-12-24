const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwtConfig');
const bcrypt = require('bcryptjs');
const HttpResponseHandler= require('../utils/HttpResponceHandler')

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userService.createUser({ name, email, password });
    return HttpResponseHandler.success(req, res, { message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user'+ error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed'+ error });
  }
};

module.exports = {
  registerUser,
  loginUser,
};