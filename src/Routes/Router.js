const express = require("express");
const route = express.Router();
const GudangController = require("../Controller/GudangController");
const BarangController = require("../Controller/BarangController");

// ROUTER GUDANG
route.post("/gudang", GudangController.createGudangHandle);
route.get("/gudang", GudangController.getAllGudangHandle);
route.get("/gudang/:id", GudangController.getByIdGudangHandle);
route.put("/gudang/:id", GudangController.updateGudangHandle);
route.delete("/gudang/:id", GudangController.deleteGudangHandle);

// ROUTER BARANG
route.post("/barang", BarangController.createBarangHandle);
route.get("/barang", BarangController.getAllBarangHandle);
route.get("/barang/:id", BarangController.getByIdBarangHandle);
route.put("/barang/:id", BarangController.updateBarangHandle);
route.delete("/barang/:id", BarangController.deleteBarangHandle);
route.get("/expired", BarangController.getExpiredHandle);
route.get("/expired-soon/:days", BarangController.getExpiredSoonHandle);

module.exports = route;
