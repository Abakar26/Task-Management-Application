# Task Management Application

This is a simple Task Management Application built with a Next.js frontend and a NestJS backend. The application allows users to create, read, update, and delete tasks with proper API integration and state management. Additionally, it includes user authentication through JWT and Passport, enabling secure access to the API endpoints.

## Table of Contents

- [Features](#features)
- [Backend (NestJS)](#backend-nestjs)
- [Frontend (Next.js)](#frontend-nextjs)
- [Authentication](#authentication)
- [Prerequisites](#prerequisites)
- [Setup and Running the Project](#setup-and-running-the-project)

---

## Features

- Users can create, read, update, and delete tasks.
- User authentication allows for secure access to the API.
- Task completion status can be toggled.
- Tasks are stored in a PostgreSQL database.
- Frontend and backend are connected via a RESTful API.
- JWT authentication secures the API.
- Backend error handling and validation with DTOs.

---

## Backend (NestJS)

The backend is built using NestJS, a progressive Node.js framework. It provides the following RESTful API endpoints to manage tasks and user authentication:

### API Endpoints

- **Task Management**
  - `GET /tasks`: Fetch all tasks.
  - `GET /tasks/:id`: Fetch a task by ID.
  - `POST /tasks`: Create a new task.
  - `PUT /tasks/:id`: Update an existing task.
  - `DELETE /tasks/:id`: Delete a task.

- **User Authentication**
  - `POST /auth/signup`: Register a new user.
  - `POST /auth/login`: Authenticate a user and return a JWT token.

### Database Entity

The backend uses a PostgreSQL database with the following fields for the Task entity:

- **id**: number (Primary Key)
- **title**: string (Task title)
- **description**: string (Task description)
- **isCompleted**: boolean (Task completion status)
- **createdAt**: Date (Timestamp of task creation)
- **updatedAt**: Date (Timestamp of last update)

For detailed backend setup instructions, please visit the [Backend Folder](./backend).

---

## Frontend (Next.js)

The frontend is built using Next.js and provides the following functionalities:

### Features

- **Task Management UI**: Displays all tasks, allows adding, editing, and deleting tasks.
- **User Authentication UI**: Allows users to register and log in.
- **Form Handling**: Input forms for creating and editing tasks and for user authentication.
- **API Integration**: Communicates with the backend using Axios.
- **State Management**: Uses React's built-in state management (`useState`, `useEffect`).

For detailed frontend setup instructions, please visit the [Frontend Folder](./frontend).

---

## Authentication

The application includes user authentication using JWT (JSON Web Tokens) and Passport for securing API routes. Users can sign up and log in through the following API routes:

### Authentication API Endpoints

- **Sign Up**: 
  - `POST /auth/signup`
  - Request Body: `{ "email": "user@example.com", "password": "yourpassword" }`
  - Response: `{ "message": "User registered successfully." }`

- **Log In**: 
  - `POST /auth/login`
  - Request Body: `{ "email": "user@example.com", "password": "yourpassword" }`
  - Response: `{ "token": "your_jwt_token" }`
  
After successful login, a JWT token is returned, which must be included in the Authorization header for subsequent requests to protected routes (e.g., task management endpoints).

---

## Prerequisites

To run this application, you need:

- **Node.js** and **npm** (or **yarn**).
- A **PostgreSQL** database.
- A **Git** client to clone the repository.

---

## Setup and Running the Project

### 1. Clone the repository:

```bash
git clone https://github.com/Abakar26/Task-Management-Application.git
cd Task-Management-Application
```

### 2. Set up environment variables for both the frontend and backend.

## Backend Setup

```bash
cd backend
npm install
```

## Set up the .env file in the backend folder:
Create a new file named .env and add the following environment variables:

```bash
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your-db-user
DATABASE_PASSWORD=your-db-password
DATABASE_NAME=your-db-name
JWT_SECRET=your-secret-key
API_URL=your-frontend-url
```

## Start the backend server:

```bash
npm run start
```

The application will be hosted on port 3000 at local enviornment http://localhost:3000/.

## Frontend Setup

```bash
cd frontend
npm install
```

## Set up the .env file in the backend folder:
Create a new file named .env and add the following environment variables:

```bash
NEXT_PUBLIC_API_BASE_URL=your_backend_hosting-url
```

## Start the backend server:

```bash
npm run dev
```

The application will be hosted on port 3001 at local enviornment http://localhost:3001/.

