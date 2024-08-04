# **Getting Started with Sequelize ORM and Node.js**

This project provides a hands-on introduction for beginners to learn how to integrate Sequelize ORM with Node.js and Express.js.


**Introduction**

Sequelize is an ORM for Node.js that simplifies database interactions by using JavaScript objects instead of SQL queries. It supports databases like MySQL, PostgreSQL, SQLite, and MariaDB.

With Sequelize, you define models to represent your data and perform CRUD operations. This abstraction makes managing and querying data easier, so you can focus on building your application.

## Setup Instructions

1. **Initialize Project**
   - Create a new directory and navigate into it.
   - Run `npm init -y` to initialize a Node.js project.
   - Install dependencies:
     ```bash
     npm install express sequelize mysql2 path fs
     ```

2. **Create Configuration File**
   - Create `config/config.json` and configure your database connection.

3. **Define Model**
   - Create `models/user.js` to define your Sequelize model for `User`.

4. **Set Up Express Server**
   - Create `index.js` for setting up Express.js and Sequelize:
     - Define routes for CRUD operations (`GET`, `POST`, `DELETE`).
     - Sync models with the database and start the server.

5. **Run the Application**
   - Ensure MySQL server is running.
   - Start your Node.js server:
     ```bash
     node index.js
     ```

6. **Test Endpoints**
   - Use tools like `curl` or Postman to test CRUD operations:
     - Retrieve users: `GET /select`
     - Insert a user: `POST /insert`
     - Delete a user: `DELETE /delete/:id`

## Notes

- Use `mysql2` as the database driver in your project.
- Update configuration details with your MySQL credentials.
- For more details, check the official documentation:
  - [Sequelize Documentation](https://sequelize.org/)
  - [Express.js Documentation](https://expressjs.com/)
