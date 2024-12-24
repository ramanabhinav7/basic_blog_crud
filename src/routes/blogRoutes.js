const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', blogController.getBlogs);
router.put('/:id', authMiddleware, blogController.updateBlog);
router.post('/', authMiddleware, blogController.createBlog); 
router.delete('/:id', authMiddleware, blogController.deleteBlog);

module.exports = router;