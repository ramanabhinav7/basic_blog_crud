const blogService = require('../services/blogService');
const HttpResponseHandler = require('../utils/HttpResponceHandler');

const createBlog = async (req, res) => {
  try {
    const newBlog = await blogService.createBlog(req.body);
    return HttpResponseHandler.success(req, res, newBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog'+ error });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getBlogs();
    HttpResponseHandler.success(req, res, blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get blogs' + error });
  }
};

const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await blogService.updateBlog(req.params.id, req.body);
    HttpResponseHandler.success(req, res, updatedBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog' + error });
  }

};

const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await blogService.deleteBlog(req.params.id);
    HttpResponseHandler.success(req, res, deletedBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' + error });
  }
}


module.exports = {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
};