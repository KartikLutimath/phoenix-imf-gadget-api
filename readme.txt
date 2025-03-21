# Phoenix: IMF Gadget API

## 🚀 Project Overview
The **Phoenix: IMF Gadget API** is a secure RESTful API designed to manage gadgets for the Impossible Missions Force (IMF). Built using **Node.js, Express, and PostgreSQL**, this API enables CRUD operations for gadgets and features a **self-destruct sequence** mechanism. It also includes **authentication and authorization** using JWT for security.

## 📌 Features
### 1️⃣ **Gadget Inventory Management (`/gadgets`)**
- **GET** `/gadgets`: Retrieve a list of all gadgets with a randomly generated mission success probability.
- **POST** `/gadgets`: Add a new gadget with a randomly generated codename.
- **PATCH** `/gadgets/{id}`: Update an existing gadget's details.
- **DELETE** `/gadgets/{id}`: Mark a gadget as "Decommissioned" instead of actual deletion and store the decommissioned timestamp.

### 2️⃣ **Self-Destruct Mechanism (`/gadgets/{id}/self-destruct`)**
- **POST** `/gadgets/{id}/self-destruct`: Triggers the self-destruct sequence for a gadget. Requires a randomly generated confirmation code.

### 3️⃣ **Bonus Features**
- **JWT Authentication & Authorization** 🔐
- **Deployment to Heroku/Render/Railway** 🌍
- **Filtering gadgets by status (`GET /gadgets?status={status}`)** 🔎

## 🔧 Tech Stack
- **Backend:** Node.js, Express
- **Database:** PostgreSQL with an ORM of choice (e.g., Sequelize, Prisma, or Knex)
- **Authentication:** JWT (JSON Web Tokens)
- **Documentation:** Postman/Swagger

## 📂 API Endpoints
### Gadget Inventory
| Method | Endpoint                   | Description |
|--------|----------------------------|-------------|
| GET    | `/gadgets`                 | Fetch all gadgets with mission success probability |
| POST   | `/gadgets`                 | Add a new gadget with a random codename |
| PATCH  | `/gadgets/{id}`             | Update gadget details |
| DELETE | `/gadgets/{id}`             | Decommission a gadget |

### Self-Destruct
| Method | Endpoint                         | Description |
|--------|----------------------------------|-------------|
| POST   | `/gadgets/{id}/self-destruct`   | Trigger self-destruct with confirmation code |

## 🔒 Authentication & Security
- Uses **JWT-based authentication** to secure endpoints.
- Protects sensitive operations (POST, PATCH, DELETE) behind authentication.
- Implements **error handling** and **rate limiting** to prevent abuse.

## 🚀 Deployment
The API is deployed on **[Heroku/Render/Railway]**. You can access it here:
**Live API URL:** [Your Deployment Link]

## 📜 API Documentation
Detailed API documentation is available on:
**Postman/Swagger Link:** [Your Documentation Link]

## 🔍 How to Run Locally
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/phoenix-imf-gadget-api.git
   cd phoenix-imf-gadget-api
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up `.env` file:**
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_NAME=your_database
   JWT_SECRET=your_secret_key
   ```
4. **Run database migrations:** (if using an ORM like Prisma or Sequelize)
   ```sh
   npx prisma migrate dev  # or npx sequelize db:migrate
   ```
5. **Start the server:**
   ```sh
   npm start
   ```

## 📩 Submission
- **GitHub Repository:** [Your Repo Link]
- **Live API URL:** [Your Deployment Link]
- **Postman/Swagger Documentation:** [Your Documentation Link]

---
🚀 **Mission Accomplished!** Let me know if you need any modifications. 🔥

