const BarangUsecase = require("../Usecase/BarangUsecase");

exports.createBarangHandle = async (req, res) => {
  try {
    const barangData = await BarangUsecase.createBarang(req.body);
    res.status(201).json({
      message: "Create Barang Success",
      data: barangData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBarangHandle = async (req, res) => {
  try {
    const barangData = await BarangUsecase.getAllBarang();
    res.status(200).json({
      message: "Get All Data Barang Success",
      data: barangData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByIdBarangHandle = async (req, res) => {
  try {
    const barangData = await BarangUsecase.getByIdBarang(req.params.id);
    res.status(200).json({
      message: "Get Id Data Barang Success",
      data: barangData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBarangHandle = async (req, res) => {
  try {
    const barangData = await BarangUsecase.updatedBarang(
      req.params.id,
      req.body
    );
    res.status(200).json({
      message: "Update Data Barang Success",
      data: barangData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBarangHandle = async (req, res) => {
  try {
    const barangData = await BarangUsecase.deletedBarang(req.params.id);
    res.status(200).json({
      message: "Delete Barang Success",
      data: barangData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExpiredHandle = async (req, res) => {
  try {
    const barangData = await BarangUsecase.getAllExpiredDate();
    res.status(200).json({
      message: "Get Expired Date Data Barang Success",
      data: barangData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExpiredSoonHandle = async (req, res) => {
  try {
    const days = req.params.days || 7;
    const barangData = await BarangUsecase.getAllExpiredDateSoon(days);
    res.status(200).json({
      message: "Get Expired Soon Barang Success",
      data: barangData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
