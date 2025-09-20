const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

// Hiển thị danh sách sản phẩm
exports.index = async (req, res) => {
  const products = await Product.find().populate('supplierId');
  res.render('products/index', { products });
};

// Form thêm sản phẩm
exports.create = async (req, res) => {
  const suppliers = await Supplier.find(); // lấy danh sách NCC để chọn
  res.render('products/create', { suppliers });
};

// Lưu sản phẩm
exports.store = async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      supplierId: req.body.supplierId
    });
    await product.save();
    res.redirect('/products');
  } catch (err) {
    console.error("❌ Lỗi thêm product:", err);
    res.status(500).send("Không thể thêm sản phẩm");
  }
};

// Form sửa sản phẩm
exports.edit = async (req, res) => {
  const product = await Product.findById(req.params.id);
  const suppliers = await Supplier.find();
  res.render('products/edit', { product, suppliers });
};

// Cập nhật sản phẩm
exports.update = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    supplierId: req.body.supplierId
  });
  res.redirect('/products');
};

// Xóa sản phẩm
exports.delete = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/products');
};
