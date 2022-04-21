COPY products(product_id, name, slogan, description, category, default_price)
FROM '/Users/sabassegovia/Desktop/truncated_Data/product_shortened.csv'
DELIMITER ','
CSV HEADER;


COPY features(feature_id, product_id, feature, value)
FROM '/Users/sabassegovia/Desktop/truncated_Data/features_shortened.csv'
DELIMITER ','
CSV HEADER;

COPY styles(style_id, product_id, name, sale_price, original_price, default_style)
FROM '/Users/sabassegovia/Desktop/truncated_Data/styles_shortened.csv'
DELIMITER ','
CSV HEADER;

COPY photos(photo_id, style_id, url, thumbnail_url)
FROM '/Users/sabassegovia/Desktop/truncated_Data/photos_shortened.csv'
DELIMITER ','
CSV HEADER;

COPY sku(sku_id, style_id, size, quantity)
FROM '/Users/sabassegovia/Desktop/truncated_Data/skus_shortened.csv'
DELIMITER ','
CSV HEADER;

COPY related(related_id, product_id, related_product_id)
FROM '/Users/sabassegovia/Desktop/truncated_Data/related_shortened.csv'
DELIMITER ','
CSV HEADER;
