# Auth 1 - Basic JWT Authentication

A simple Node.js/Express authentication server using MongoDB and JSON Web Tokens (JWT).

## Features

- User Registration (Signup)
- User Login with Password Hashing (bcrypt)
- JWT-based authentication
- MongoDB integration with Mongoose
- Environment variable configuration

## Prerequisites

- Node.js installed
- MongoDB installed and running locally or a MongoDB Atlas URI

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Copy the `.env.example` file to `.env` and fill in your details:
   ```bash
   cp .env.example .env
   ```
   *Note: Make sure to set a strong `SECRET` for your JWTs.*

3. **Start the server:**
   ```bash
   npm run start
   # or with nodemon if installed globally
   nodemon server.js
   ```
   The server will start on port 3000 by default.

## API Endpoints

- `POST /signup` - Register a new user (`name`, `email`, `password`)
- `POST /login` - Authenticate a user and receive a JWT (`email`, `password`)
