const GudangUsecase = require("../Usecase/GudangUsecase");

exports.createGudangHandle = async (req, res) => {
  try {
    const gudangData = await GudangUsecase.createGudang(req.body);
    res.status(201).json({
      message: "Create Gudang Success",
      data: gudangData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllGudangHandle = async (req, res) => {
  try {
    const gudangData = await GudangUsecase.getAllGudang();
    res.status(200).json({
      message: "Get All Data Gudang",
      data: gudangData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByIdGudangHandle = async (req, res) => {
  try {
    const gudangData = await GudangUsecase.getByIdGudang(req.params.id);
    if (!gudangData)
      return res.status(404).json({ message: "Data Gudang Not Found" });
    res
      .status(200)
      .json({ message: "Get Gudang By Id Success", data: gudangData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateGudangHandle = async (req, res) => {
  try {
    const gudangData = await GudangUsecase.updateGudang(
      req.params.id,
      req.body
    );
    res.status(200).json({
      message: "Update data Success",
      data: gudangData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteGudangHandle = async (req, res) => {
  try {
    const gudangData = await GudangUsecase.deleteGudang(req.params.id);
    res.status(200).json({
      message: "Delete Data Gudang Success",
      data: gudangData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
