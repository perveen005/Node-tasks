Task API
This project implements a RESTful API using Node.js, Express.js, and JSON files to perform CRUD operations (Create, Read, Update, Delete) on tasks. The API allows users to manage tasks with properties such as title, description, and completion status.

Setup
Clone the repository:
bash
Copy code
git clone <repository-url>
Install the dependencies:
bash
Copy code
cd <project-folder>
npm install
Start the server:
sql
Copy code
npm start
By default, the server runs on http://localhost:3000.

Endpoints
Retrieve all tasks
URL: /tasks
Method: GET
Description: Retrieves all tasks.
Response:
Status code: 200
Body: Array of tasks
Retrieve a single task
URL: /tasks/:Id
Method: GET
Description: Retrieves a single task by its ID.
Response:
Status code: 200
Body: Task object
Create a new task
URL: /tasks
Method: POST
Description: Creates a new task.
Request body: Task object (with properties: title, description, flag)
Response:
Status code: 200 (Success)
Status code: 400 (Bad Request, if validation fails)
Body: Success message or validation error message
Update an existing task
URL: /tasks/:Id
Method: PUT
Description: Updates an existing task by its ID.
Request body: Task object (with properties: title, description, flag)
Response:
Status code: 200 (Success)
Status code: 400 (Bad Request, if validation fails)
Status code: 404 (Not Found, if task with the given ID does not exist)
Body: Success message or validation error message
Delete a task
URL: /tasks/:Id
Method: DELETE
Description: Deletes a task by its ID.
Response:
Status code: 200 (Success)
Status code: 404 (Not Found, if task with the given ID does not exist)
Body: Success message or error message
JSON Data File
The tasks are stored in a JSON file named tasks.json. The file contains an array of task objects with properties: Id, title, description, and flag. Any changes made through the API endpoints will be reflected in this file.

Validator
The validator.js module provides functions for task validation, including checking for required fields and validating the completion status as a boolean value.

License
This project is licensed under the MIT License. See the LICENSE file for more information.

Feel free to modify and enhance this README file based on your project requirements and specifications.


