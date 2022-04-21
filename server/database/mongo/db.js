const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

// const kittySchema = new mongoose.Schema({
//   name: String,
// });
// kittySchema.methods.speak = function speak() {
//   const greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// };

// const Kitten = mongoose.model('Kitten', kittySchema);

// const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

// const fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"

// console.log(fluffy);


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