const express = require('express');
const router = express.Router();
const HttpResponseHandler = require('../utils/HttpResponceHandler')


const authRouter = require('./authRoutes');
const blogRouter = require('./blogRoutes');

// Health Check
router.get('/healthcheck', (req, res) => {
    const data = {
      ts: new Date(),
    };
    return HttpResponseHandler.success(req, res, data);
  });
 
  
  router.use('/auth', authRouter);
  router.use('/blog',blogRouter);
  module.exports = router;