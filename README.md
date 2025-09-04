# User Role App

## Prerequisites

Before running the application, make sure you have installed:

- Node.js
- Apache
- MySQL
- PHP

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/EilonBlanche/user-role-app.git
```
```bash
cd user-role-app
```
### 2. Create Database

Create a MySQL database:

```bash
CREATE DATABASE user_role_db;
```

### 3. Setup Backend

```bash
cd user-role-backend
composer install
php artisan migrate:refresh
php artisan db:seed
php artisan serve
```

Access the backend at: http://localhost:8000

### 4. Setup Frontend
```bash
cd user-role-frontend
npm install
npm start
```
Access the frontend at: http://localhost:3000
