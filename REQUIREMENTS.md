
## API Endpoints
# Product
- Index: /api/product
- Show: /api/product/:id
- Create: /api/product (token required)
  body : {
   "name":"product1",
   "price":"150.000"
}

# User
- Login and get token: /api/user/login
  body : {
    "email":"namle@gmail.com",
    "password":"nam205806"
  }

## Data Types
## `product`

| `Columns`           | `type`
| id                  | `SERIAL`
| name                | `varchar(150)`
| price               | `float`

## `user`

| `Columns`           | `type`
| id                  | `SERIAL`
| firstName           | `varchar(150)`
| lastName            | `varchar(150)`
| email               | `varchar(150)`
| password            | `varchar(150)`

## `order`

| `Columns`           | `type`
| id                  | `SERIAL`
| status              | `varchar(150)`
| userId              | `SERIAL`



## `product_quantity`

| `Columns`           | `type`
| id                  | `SERIAL`
| orderId             | `SERIAL`
| productCode         | `SERIAL`
| quantity            | `integer`

