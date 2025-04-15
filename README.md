Fintech API – NestJS & MySQL
📌 Project Overview
This project is a simple fintech backend application built using NestJS and MySQL. It provides functionalities for user account management, financial transactions, balance tracking, and secure authentication using JWT.

🚀 Features Implemented
1️⃣ User Account Management
✔ User registration, login, and authentication using JWT. ✔ Passwords are securely hashed before storing in the database. ✔ User data (name, email, password hash) is stored in MySQL.

2️⃣ Transaction Management
✔ Users can perform deposits, withdrawals, and transfers. ✔ Transactions store amount, type, timestamp, and sender/receiver details. ✔ Balances are updated correctly and checked for insufficient funds.

3️⃣ Balance Management
✔ Each transaction updates the user's account balance in real time. ✔ Users can check their current balance via API endpoints. ✔ Ensures accuracy and consistency of financial data.

4️⃣ Database Integration
✔ MySQL relational database stores users & transactions. ✔ TypeORM is used to interact with the database efficiently. ✔ Implements data integrity checks for financial operations.

5️⃣ API Endpoints
✔ RESTful API endpoints handle CRUD operations for users and transactions. ✔ Includes input validation and error handling for security. ✔ Swagger API documentation enables easy testing & interaction.

🛠 Technologies Used
✅ NestJS (TypeScript-based backend framework) ✅ MySQL (Relational database) ✅ TypeORM (Database ORM) ✅ JWT (JSON Web Token) (Authentication) ✅ Bcrypt.js (Password hashing) ✅ Swagger (API Documentation)

🚀 How to Set Up the Project
1️⃣ Install Dependencies
sh
npm install
2️⃣ Configure .env File
Create a .env file with the following environment variables:

env
PORT=5000
JWT_SECRET=your_secure_secret_key
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=fintech_db
3️⃣ Run the MySQL Database
Run this SQL script to create necessary tables:

sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    balance DECIMAL(10,2) DEFAULT 0.00,
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    type ENUM('deposit', 'withdrawal', 'transfer') NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    receiver_id INT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
);
4️⃣ Start the Server
Run the following command:

sh
npm run start
The server will start on http://localhost:5000.

🔎 API Endpoints
1️⃣ User Authentication
✔ POST /api/auth/register → Register new users ✔ POST /api/auth/login → Authenticate users & issue JWT ✔ GET /api/auth/profile → Get user profile (Requires token)

2️⃣ Transactions & Balance
✔ POST /api/transactions/deposit → Deposit money ✔ POST /api/transactions/withdraw → Withdraw money (Checks balance) ✔ POST /api/transactions/transfer → Transfer funds ✔ GET /api/balance → View account balance

3️⃣ Admin Actions
✔ GET /api/users → View all users (Admin-only) ✔ DELETE /api/users/:id → Delete a user (Admin-only)

🛠 Swagger API Documentation
✔ Swagger UI allows easy testing of endpoints. ✔ Access via http://localhost:5000/api/docs. ✔ All API methods are documented with request/response formats.

📌 Future Enhancements
✔ Refresh Tokens → Extend session duration ✔ 2FA Authentication → Add extra security ✔ OAuth Login → Google/Facebook authentication ✔ Frontend Dashboard → A React-based UI
