## API Endpoints

# Product
- Index: http://localhost:8000/api/product
- Show: http://localhost:8000/api/product/:id
- Create: http://localhost:8000/api/product (token required)
  body : {
  "name":"product1",
  "price":"150.000"
  }

# User
- Index: http://localhost:8000/api/user (token required)
- Show: http://localhost:8000/api/user/:id (token required)
- Create User: http://localhost:8000/api/user
  body : {
    "firstName": "nam",
    "lastName": "le",
    "email": "namle505@gmail.com",
    "password": "nam205806"
 }
- Login and get token: http://localhost:8000/api/user/login
  body : {
  "email":"namle@gmail.com",
  "password":"nam205806"
  }

# Order
- Index:http://localhost:8000/api/order
- Show: http://localhost:8000/api/order:id
- Add a product to a order: http://localhost:8000/api/order/add-product (token required)
  body : {
  "orderId" : "1",
  "productCode" : "1",
  "quantity" : 5
 }

## Data Types
## `product`

| `Columns` | `type`
| id | `SERIAL`
| name | `varchar(150)`
| price | `float`

## `user`

| `Columns` | `type`
| id | `SERIAL`
| firstName | `varchar(150)`
| lastName | `varchar(150)`
| email | `varchar(150)`
| password | `varchar(150)`

## `order`

| `Columns` | `type`
| id | `SERIAL`
| status | `varchar(150)`
| userId | `SERIAL`

## `product_quantity`

| `Columns` | `type`
| id | `SERIAL`
| orderId | `SERIAL`
| productCode | `SERIAL`
| quantity | `integer`
