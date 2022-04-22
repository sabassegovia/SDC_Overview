const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

const productSchema = new mongoose.Schema({
  product_id: Number,
  name: String,
  slogan: String,
  description: String,
  default_price: Number,
  feature: [
    {
      feature: String,
      value: String,
    },
  ],
  styles: [
    {
      style_id: Number,
      name: String,
      original_price: Number,
      sale_price: Number,
      defuault: Boolean,
      photos: [
        {
          thumbnails: String,
          url: String,
        },
      ],
      skus: {
        sku_id: {
          quantity: Number,
          size: String,
        },
      },
    },
  ],
  related: [
    {
      related_id: Number,
      product_id: Number,
      related_product_id: Number
    }
  ],
});
const Product = mongoose.model('Product', productSchema);