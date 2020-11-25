const mongoose = require("mongoose");

const uri = process.env.MONGO_URL;
mongoose.connect(uri, { useNewUrlParser: true });

const productSchema = new mongoose.Schema({
    title: String,
    price: number,
    createdAt: Date,
    productAssets: String,
    images: {
        main: String,
        add: [String]
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = async (req, res) => {
  // const { name = 'World' } = req.query;
  const db = mongoose.connection;
  db.on("error", (err) => {
    res.status(200).send(JSON.stringify(err));
  });
  db.once("open", async () => {
    const products = await Product.find();
    res.status(200).send(JSON.stringify(products));
  });

  setTimeout(() => {
    res.status(200).send("Nothing happened");
  }, 5000);
};
