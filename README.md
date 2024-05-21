# E-Shop

E-Shop is an e-commerce application developed using Node.js, Express, TypeScript, and MongoDB with Mongoose for effective data management. The application provides endpoints for managing products and orders.

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- Yarn (v1.22 or higher)
- MongoDB (v4.4 or higher)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/jishan1019/E-Shop---Assignment-2.git
   cd E-Shop
   ```

2. **Install Necessary Dependency via command**

   ```
   yarn
   ```

3. **Run Project via below command**
   ```
   yarn start:dev
   Project Running Port : http://localhost:4000
   ```

### Api Endpoints

1. **Product**

   ```
   base_url:http://localhost:4000

    1. GET ALL Products : {{base_url}}/api/products
    2. Get Specific Product : {{base_url}}/api/products/664c4f0c7da6ab3af93fbd0c
    3. Get Search Product : {{base_url}}/api/products?searchTerm=iphone
    4. POST Product :  {{base_url}}/api/products
    5. Update Product : {{base_url}}/api/products/664c4f0c7da6ab3af93fbd0c
    6. Delete Product : {{base_url}}/api/products/664c4f0c7da6ab3af93fbd0c
   ```

   2. **Order**

   ```
   1. Get All Order : {{base_url}}/api/orders
   1. Get Order By Query : {{base_url}}/api/orders?email=level2@programming-hero.com
   1. Post Order : {{base_url}}/api/orders

   ```
