# Simple User Management API

## Overview

This API provides basic CRUD (Create, Read, Update, Delete) operations for managing user data. It allows you to create, retrieve, update, and delete user information such as username and password.

## Base URL

The base URL for accessing the API endpoints is:

Replace `https://simple-crud-api-six.vercel.app/` with the appropriate host and port if the server is hosted elsewhere.

## Authentication

This API does not require authentication. Anyone can access the endpoints.

## Endpoints

### Get all users

- **URL:** `/users`
- **Method:** GET
- **Description:** Retrieve a list of all users.
- **Response:** Returns an array of user objects containing `username` and `password` fields.

### Get user by ID

- **URL:** `/users/:id`
- **Method:** GET
- **Description:** Retrieve user information by ID.
- **Parameters:**
  - `id`: The unique identifier of the user.
- **Response:** Returns the user object corresponding to the provided ID.

### Create a new user

- **URL:** `/users`
- **Method:** POST
- **Description:** Create a new user.
- **Request Body:** JSON object containing `username` and `password` fields.
- **Response:** Returns the created user object.

### Update user

- **URL:** `/users/:id`
- **Method:** PUT
- **Description:** Update user information by ID.
- **Parameters:**
  - `id`: The unique identifier of the user.
- **Request Body:** JSON object containing fields to be updated (`username`, `password`).
- **Response:** Returns the updated user object.

### Delete user

- **URL:** `/users/:id`
- **Method:** DELETE
- **Description:** Delete user by ID.
- **Parameters:**
  - `id`: The unique identifier of the user.
- **Response:** Returns a message indicating successful deletion.

## Error Handling

- If an endpoint is accessed with an invalid ID or if the requested resource does not exist, the API will return a `404 Not Found` error.
- If there are any validation errors (e.g., invalid password format), the API will return a `400 Bad Request` error with details about the validation failure.

## Sample Usage

### Get all users
