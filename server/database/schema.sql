CREATE SCHEMA productSchema;
CREATE DATABASE productsdb;

CREATE TABLE products (
 product_id INT UNIQUE NOT NULL,
 name VARCHAR(255) NOT NULL,
 slogan VARCHAR(255) NOT NULL,
 description VARCHAR(255) NOT NULL,
 category VARCHAR(255) NOT NULL,
 default_price DECIMAL(5, 2) NOT NULL
);


ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);

CREATE TABLE product_styles (
 style_id INT NOT NULL,
 product_id INT NOT NULL,
 name VARCHAR(255) NOT NULL,
 original_price DECIMAL(5, 2) NOT NULL,
 sale_price DECIMAL(5, 2) NOT NULL,
 default_style BOOLEAN NOT NULL
);


ALTER TABLE product_styles ADD CONSTRAINT product_styles_pkey PRIMARY KEY (style_id);

CREATE TABLE product_features (
 product_id INT NOT NULL,
 feature VARCHAR(255) NOT NULL,
 value VARCHAR(255) NOT NULL
);


ALTER TABLE product_features ADD CONSTRAINT product_features_pkey PRIMARY KEY (product_id);

CREATE TABLE related_products (
 product_id INT NOT NULL,
 related_product_id INT NOT NULL
);


ALTER TABLE related_products ADD CONSTRAINT related_products_pkey PRIMARY KEY (product_id);

CREATE TABLE product_photos (
 style_id INT NOT NULL,
 thumbnail_url VARCHAR(255) NOT NULL,
 url VARCHAR(255) NOT NULL
);


ALTER TABLE product_photos ADD CONSTRAINT product_photos_pkey PRIMARY KEY (style_id);

CREATE TABLE product_sku (
 style_id INT NOT NULL,
 quantity INT NOT NULL,
 size VARCHAR(255) NOT NULL
);


ALTER TABLE product_sku ADD CONSTRAINT product_sku_pkey PRIMARY KEY (style_id);

ALTER TABLE product_styles ADD CONSTRAINT product_styles_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE product_features ADD CONSTRAINT product_features_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE related_products ADD CONSTRAINT related_products_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE product_photos ADD CONSTRAINT product_photos_style_id_fkey FOREIGN KEY (style_id) REFERENCES product_styles(style_id);
ALTER TABLE product_sku ADD CONSTRAINT product_sku_style_id_fkey FOREIGN KEY (style_id) REFERENCES product_styles(style_id);
