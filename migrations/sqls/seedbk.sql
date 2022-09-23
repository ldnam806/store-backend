BEGIN;

CREATE TABLE IF NOT EXISTS public.orders
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    status numeric NOT NULL,
    user_id bigint NOT NULL,
    CONSTRAINT orders_pkey PRIMARY KEY (id)
);


DROP TABLE IF EXISTS public.product;
CREATE TABLE IF NOT EXISTS public.product
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    price character varying COLLATE pg_catalog."default" NOT NULL,
    PRIMARY KEY (id)
);


DROP TABLE IF EXISTS public.product_quantity;
CREATE TABLE IF NOT EXISTS public.product_quantity
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    quantity numeric NOT NULL,
    "orderId" bigint NOT NULL,
    "productCode" bigint NOT NULL,
    CONSTRAINT product_quantity_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."user"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    "firstName" character varying COLLATE pg_catalog."default" NOT NULL,
    "lastName" character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id)
    REFERENCES public."user" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;
CREATE INDEX IF NOT EXISTS fki_user_id
    ON public.orders(user_id);


ALTER TABLE IF EXISTS public.product_quantity
    ADD CONSTRAINT order_id FOREIGN KEY ("orderId")
    REFERENCES public.orders (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;
CREATE INDEX IF NOT EXISTS fki_order_id
    ON public.product_quantity("orderId");


ALTER TABLE IF EXISTS public.product_quantity
    ADD FOREIGN KEY ("productCode")
    REFERENCES public.product (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;