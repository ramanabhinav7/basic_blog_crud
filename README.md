# Blog Management API
- This is developed and tested in windows 11 OS

## Overview
The Blog Management API is a RESTful API built with Node.js and Express that allows users to register, log in, and manage blogs. It supports JWT authentication for secure access to private endpoints.

## Features
- User Registration
- User Login with JWT Token Generation
- CRUD Operations for Blog Management
  - Add Blog
  - Update Blog
  - Delete Blog
  - Get Blog List
- Image Uploads for Blogs
- Protected Endpoints using JWT Authentication



## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd <repository-name>
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up the environment variables in the `.env` file.

## Usage
1. Start the server:
   ```
   npm run lcl:dev

   output will be like below

   [nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/app.js`
Server is running on port 3000.
Connected to database[mysql].
   ```
2. Access the API at `http://localhost:3000`.

## API Endpoints
### Public Endpoints
- **POST /auth/register**: User Registration
- **POST /auth/login**: User Login
- **GET /healthcheck** healthcheck of the server
- **GET /api/blogs**: Get Blog List

### Private Endpoints ( login/auth bearer token is required)
- **POST /blogs**: Add Blog
- **PUT /blogs/:id**: Update Blog
- **DELETE /blogs/:id**: Delete Blog

## Contributing

## License
This project is licensed under the MIT License.