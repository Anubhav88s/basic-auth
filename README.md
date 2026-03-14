# Auth 1 — Basic JWT Authentication

A minimal Node.js/Express authentication server using MongoDB and JSON Web Tokens. This project demonstrates the fundamentals of user authentication — registration, login, and token-based session management.

## Features

- **User Registration** — Create accounts with username, email, and password
- **Password Hashing** — Bcrypt with salt round of 10 for secure credential storage
- **JWT Authentication** — Stateless token-based authentication using `jsonwebtoken`
- **MongoDB + Mongoose** — Database storage with schema validation, unique constraints, and trimming
- **Environment Configuration** — Secrets and DB connection managed via `dotenv`
- **ES Modules** — Modern `import/export` syntax throughout

## 📁 Project Structure

```
auth1/
├── config/
│   └── db.js            # MongoDB connection
├── models/
│   └── user.js          # Mongoose user schema (userName, email, password)
├── routes/
│   └── auth.js          # Auth routes (signup, login)
├── .env.example         # Environment variable template
├── .gitignore           # Git ignore rules
├── package.json
└── server.js            # Express app entry point
```

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js + Express | Server framework |
| MongoDB + Mongoose | Database & ODM |
| bcrypt | Password hashing |
| jsonwebtoken | JWT creation & verification |
| dotenv | Environment variable management |

## 🚀 Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   ```
   Fill in `PORT`, `SECRET` (use a strong random string), and `MONGODB_URL`.

3. **Start the server:**
   ```bash
   npm run start
   # or in development mode
   npm run dev
   ```
   The server will start on port 3000 by default.
