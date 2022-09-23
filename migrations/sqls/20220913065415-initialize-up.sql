

CREATE TABLE IF NOT EXISTS "user"(
    id SERIAL PRIMARY KEY,
    "firstName" varchar(150),
    "lastName" varchar(150),
    email varchar(150),
    password varchar(150)
);


CREATE TABLE IF NOT EXISTS "order"(
    id SERIAL PRIMARY KEY,
    status varchar(20),
    userId SERIAL
   
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

 alter table "order" add foreign key (userId) REFERENCES "user"(id);
 alter table product_quantity add foreign key (orderId) REFERENCES "order"(id);
 alter table product_quantity add foreign key (productCode) REFERENCES product(id);

-- INSERT INTO product (name, price )
-- VALUES ('Cardinal1', 15000),
-- ('Cardinal2', 55000),
-- ('Cardinal3', 5000),
-- ('Cardinal4', 345000),
-- ('Cardinal5', 55000);


INSERT INTO "user" ("firstName", "lastName" , email , password )
VALUES ('nam', 'le' , 'namle@gmail.com' ,'nam205806'),
('tran', 'anh' , 'trananh@gmail.com' ,'nam205806'),
('anh', 'dung' , 'anhdung@gmail.com','nam205806'),
('anh', 'vu' , 'anhvu@gmail.com' ,'nam205806');
