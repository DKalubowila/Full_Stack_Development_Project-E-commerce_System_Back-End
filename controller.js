const { response, use } = require("./app");
const Product = require("./model");

const getProducts = (req, res, next) => {
  Product.find()
    .then((response) => {
      res.json({ response });
    })

    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const addProducts = (req, res, next) => {
  const product = new Product({
    id: req.body.id,
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    rating: req.body.rating,
    imageUrl: req.body.imageUrl,
  });

  product
    .save()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const deleteProducts = (req, res, next) => {
  const id = req.body.id;
  Product.deleteOne({ id: id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const updateProducts = (req, res, next) => {
  const { id, title, price, category, rating, imageUrl } = req.body;
  Product.updateOne(
    { id: id },
    {
      title: title,
      price: price,
      category: category,
      rating: rating,
      imageUrl: imageUrl,
    }
  )
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

exports.getProducts = getProducts;
exports.addProducts = addProducts;
exports.deleteProducts = deleteProducts;
exports.updateProducts = updateProducts;
