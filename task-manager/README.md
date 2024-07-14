 # Task Manager API

A simple RESTful API for managing tasks, built with Node.js and Express.js.

## Project Description

This project implements a RESTful API to perform CRUD operations (Create, Read, Update, Delete) on tasks. The tasks have a title, description, and a flag for completion status. The API is tested using Postman.

## Endpoints

- `GET /tasks`: Retrieve all tasks.
- `GET /tasks/:id`: Retrieve a single task by its ID.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update an existing task by its ID.
- `DELETE /tasks/:id`: Delete a task by its ID.

## Task Schema

```json
{
  "id": 1,
  "title": "Sample Task",
  "description": "This is a sample task",
  "completed": false
}
