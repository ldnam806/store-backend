

CREATE TABLE IF NOT EXISTS "users"(
    id SERIAL PRIMARY KEY,
    email varchar(150),
    "firstName" varchar(150),
    "lastName" varchar(150),
    password varchar(150)
);


CREATE TABLE IF NOT EXISTS "orders"(
    id SERIAL PRIMARY KEY,
    status varchar(20),
    "userId" SERIAL
   
);


CREATE TABLE IF NOT EXISTS product_quantity(
    id SERIAL PRIMARY KEY,
    orderId SERIAL,
    productCode SERIAL,
    quantity integer
);


CREATE TABLE IF NOT EXISTS product(
    id SERIAL PRIMARY KEY,
    name varchar(150),
    price float
);

 alter table "orders" add foreign key ("userId") REFERENCES "users"(id) on delete cascade on update cascade;
 alter table product_quantity add foreign key (orderId) REFERENCES "orders"(id) on delete cascade on update cascade;
 alter table product_quantity add foreign key (productCode) REFERENCES product(id) on delete cascade on update cascade;


