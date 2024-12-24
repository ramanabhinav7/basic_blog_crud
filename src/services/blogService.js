const Blog = require('../models/blogModel');

const createBlog = async (blogData) => {
  try {
    const newBlog = await Blog.create(blogData);
    return newBlog;
  } catch (error) {
    throw error;
  }
};

const getBlogs = async () => {
  try {
    const blogs = await Blog.findAll();
    return blogs;
  } catch (error) {
    throw error;
  }
};

const updateBlog = async (id, blogData) => { 
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return null;
    }

    const updatedBlog = await blog.update(blogData);
    return updatedBlog;
  } catch (error) {
    throw error;
  }
};

const deleteBlog = async (id) => {
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return null;
    }

    await blog.destroy();
    return blog;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
};