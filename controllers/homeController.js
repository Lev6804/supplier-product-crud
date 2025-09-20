const Supplier = require('../models/Supplier');
const Product = require('../models/Product');

exports.index = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    const products = await Product.find().populate('supplierId');
    res.render('home', { suppliers, products });
  } catch (err) {
    console.error("❌ Lỗi:", err);
    res.status(500).send("Không thể load dữ liệu");
  }
};
