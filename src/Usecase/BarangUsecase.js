const barangRepo = require("../Repository/BarangRepo");

class BarangUsecase {
  async createBarang(data) {
    return await barangRepo.create(data);
  }

  async getAllBarang() {
    return await barangRepo.findAll();
  }

  async getByIdBarang(id) {
    return await barangRepo.findById(id);
  }

  async updatedBarang(id, data) {
    return await barangRepo.update(id, data);
  }

  async deletedBarang(id) {
    return await barangRepo.delete(id);
  }

  async getAllExpiredDate() {
    return await barangRepo.findExpired();
  }

  async getAllExpiredDateSoon(days) {
    return await barangRepo.findExpiredSoon(days);
  }
}

module.exports = new BarangUsecase();
