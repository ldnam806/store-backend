
CREATE TABLE IF NOT EXISTS order(
    orderId integer GENERATED ALWAYS AS IDENTITY,
    status varchar(20),
    userId integer,
    PRIMARY KEY (orderId)
    FOREIGN KEY (userId) REFERENCES user(userId)
);

CREATE TABLE IF NOT EXISTS product(
    productId integer GENERATED ALWAYS AS IDENTITY,,
    name varchar(150),
    price float,
    PRIMARY KEY (productId)
);

CREATE TABLE IF NOT EXISTS product_quantity(
    id integer GENERATED ALWAYS AS IDENTITY,,
    orderId integer,
    productCode integer,
    quantity integer,
    PRIMARY KEY (id)
    FOREIGN KEY (orderId) REFERENCES order(orderId)
    FOREIGN KEY (productCode) REFERENCES product(productId)
);

CREATE TABLE IF NOT EXISTS user(
    userId integer GENERATED ALWAYS AS IDENTITY,
    usename string NOT NULL,
    "firstName" varchar(150),
    "lastName" varchar(150),
    password varchar(150),
    PRIMARY KEY (userId)
);