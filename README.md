# Product CRUD API (MVC Pattern)

A simple Node.js + Express + MongoDB (Mongoose) application implementing CRUD operations for products.

## 📂 Project Structure
```
product-crud-mvc/
├── server.js
├── config/
│   └── db.js
├── controllers/
│   └── productController.js
├── models/
│   └── productModel.js
├── routes/
│   └── productRoutes.js
├── package.json
└── README.md
```

## 🚀 Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start MongoDB locally (e.g., mongodb://127.0.0.1:27017/productsdb)
3. Run the server:
   ```bash
   npm run dev
   ```
4. Test API endpoints:
   - `POST /api/products` → Create product
   - `GET /api/products` → Get all products
   - `GET /api/products/:id` → Get product by ID
   - `PUT /api/products/:id` → Update product
   - `DELETE /api/products/:id` → Delete product
