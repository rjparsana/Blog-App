Personal Blog App - Backend
This is the backend service for the Personal Blog App. It is built using Node.js and Express.js, with MongoDB as the database. The backend supports full CRUD operations for blog posts, including creating, reading, updating, and deleting posts.

Features
Create a blog post: Add a new blog post with a title and content.
Retrieve all posts: View all the blog posts.
View single post: Retrieve the details of a specific blog post by its ID.
Update a post: Edit an existing blog post.
Delete a post: Remove a blog post by its ID.
Requirements
Node.js (version 14.x or higher)
MongoDB (local or cloud-hosted)
Express.js
Mongoose for MongoDB interaction
CORS for cross-origin resource sharing

Installation
Clone the repository:

git clone https://github.com/your-username/personal-blog-backend.git
cd personal-blog-backend

Install the dependencies:

npm install
Create a .env file in the root directory and add your MongoDB connection string and port:

.env file
MONGODB_URI=
PORT=5000

Start the server:

node server.js
The backend server will start on http://localhost:5000.

API Endpoints
The following API endpoints are available to interact with the blog posts:

1. Create a Post
URL: POST http://localhost:5000/v1/blog/add
Description: Adds a new blog post.
Response: Returns the created post.

3. Retrieve All Posts
URL: GET http://localhost:5000/v1/blog/posts
Description: Retrieves a list of all blog posts.
Response: Returns an array of all blog posts.

5. Retrieve a Single Post
URL: GET http://localhost:5000/v1/blog/post/:id
Description: Retrieves a single blog post by its ID.
Response: Returns the details of the specified post.

7. Update a Post
URL: PUT http://localhost:5000/v1/blog/post/:id
Description: Updates the title or content of an existing post.
Response: Returns the updated post.

9. Delete a Post
URL: DELETE http://localhost:5000/v1/blog/post/:id
Description: Deletes the specified blog post.
Response: Returns a message indicating successful deletion.
Running the API Tests
You can use Postman or cURL to test the API. Here are example requests:

Create a Post:

URL: http://localhost:5000/v1/blog/add
Method: POST

Retrieve All Posts:

URL: http://localhost:5000/v1/blog/posts
Method: GET

Retrieve a Post by ID:

URL: http://localhost:5000/v1/blog/post/<id>
Method: GET

Update a Post:

URL: http://localhost:5000/v1/blog/post/<id>
Method: PUT

Delete a Post:

URL: http://localhost:5000/v1/blog/post/<id>
Method: DELETE

Deployment


License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Feel free to contribute by opening a pull request. Please ensure your changes pass the test cases and the build process before submitting a PR.

