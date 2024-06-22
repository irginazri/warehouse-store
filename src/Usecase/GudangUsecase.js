const GudangRepo = require("../Repository/GudangRepo");

class GudangUsecase {
  async createGudang(data) {
    return await GudangRepo.create(data);
  }

  async getAllGudang() {
    return await GudangRepo.findAll();
  }

  async getByIdGudang(id) {
    return await GudangRepo.findById(id);
  }

  async updateGudang(id, data) {
    return await GudangRepo.update(id, data);
  }

  async deleteGudang(id) {
    return await GudangRepo.delete(id);
  }
}

module.exports = new GudangUsecase();
