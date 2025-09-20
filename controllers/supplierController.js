const Supplier = require('../models/Supplier');

exports.index = async (req, res) => {
    const suppliers = await Supplier.find();
    res.render('suppliers/index', { suppliers });
};

exports.create = (req, res) => {
    res.render('suppliers/create');
};

exports.store = async (req, res) => {
    await Supplier.create(req.body);
    res.redirect('/suppliers');
};

exports.delete = async (req, res) => {
    await Supplier.findByIdAndDelete(req.params.id);
    res.redirect('/suppliers');
};
// Form sửa
exports.edit = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    res.render('suppliers/edit', { supplier });
  } catch (err) {
    res.status(500).send("❌ Lỗi khi load form edit supplier");
  }
};

// Cập nhật
exports.update = async (req, res) => {
  try {
    await Supplier.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone
    });
    res.redirect('/');
  } catch (err) {
    res.status(500).send("❌ Lỗi khi update supplier");
  }
};
