# CRUD API with PostgreSQL and Sequelize

This project is a simple CRUD (Create, Read, Update, Delete) API built using Node.js, Express, PostgreSQL, and Sequelize ORM. The API includes user management with password encryption using bcrypt.

## Features
- Create, Read, Update, and Delete (CRUD) operations for users
- Password hashing using bcrypt
- Validation for user inputs
- Sequelize ORM for database management
- PostgreSQL as the database

## Prerequisites
Make sure you have the following installed:
- Node.js
- PostgreSQL
- Git

## Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <your-project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   Create a `.env` file in the root directory and add:
   ```
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_database_name
   DB_PORT=5432
   ```
4. Set up the database:
   - Create a PostgreSQL database.
   - Run migrations or sync models with:
     ```sh
     npm run migrate  # If using migrations
     ```

## Running the Server
Start the Express server:
```sh
npm start
```

## API Endpoints

### 1. Create User (POST /api/users)
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "securepassword",
    "mobNo": "1234567890"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "mobNo": "1234567890",
    "createdAt": "2025-02-07T12:00:00.000Z"
  }
  ```

### 2. Get All Users (GET /api/users)
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "mobNo": "1234567890",
      "createdAt": "2025-02-07T12:00:00.000Z"
    }
  ]
  ```

### 3. Get User by ID (GET /api/users/:id)
- **Response:**
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "mobNo": "1234567890",
    "createdAt": "2025-02-07T12:00:00.000Z"
  }
  ```

### 4. Update User (PUT /api/users/:id)
- **Request Body:**
  ```json
  {
    "name": "Updated Name"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User updated successfully"
  }
  ```

### 5. Delete User (DELETE /api/users/:id)
- **Response:**
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

## Git Workflow
- Create a new branch:
  ```sh
  git checkout -b feature/branch-name
  ```
- Commit changes:
  ```sh
  git add .
  git commit -m "Feature: Added new feature"
  ```
- Push branch:
  ```sh
  git push origin feature/branch-name
  ```
- Create a Pull Request (PR) and merge.

## License
This project is open-source and available for modification and distribution.

---

Let me know if you need any modifications!

