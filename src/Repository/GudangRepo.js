const db = require("../config/db");
const gudang = require("../Models/GudangModel");

class GudangRepo {
  static async create(data) {
    const { nama_gudang } = data;
    const querySql = `INSERT INTO gudang(nama_gudang) VALUES (?)`;
    try {
      const [result] = await db.execute(querySql, [nama_gudang]);
      return result.insertId;
    } catch (error) {
      console.error("Error creating gudang: ", error);
      throw error;
    }
  }

  static async findAll() {
    const querySql = `SELECT * FROM gudang`;
    try {
      const [rows] = await db.execute(querySql);
      return rows.map((row) => new gudang(row.kode_gudang, row.nama_gudang));
    } catch (error) {
      console.error("Error find all gudang: ", error);
      throw error;
    }
  }

  static async findById(id) {
    const querySql = `SELECT * FROM gudang WHERE kode_gudang = ?`;
    try {
      const [rows] = await db.execute(querySql, [id]);
      if (rows.length === 0) return null;
      const { kode_gudang, nama_gudang } = rows[0];
      return new gudang(kode_gudang, nama_gudang);
    } catch (error) {
      console.error("Error find by id gudang: ", error);
      throw error;
    }
  }

  static async update(id, data) {
    const { nama_gudang } = data;
    const querySql = `UPDATE gudang SET nama_gudang = ? WHERE kode_gudang = ?`;
    try {
      const [result] = await db.execute(querySql, [nama_gudang, id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error updated data gudang: ", error);
      throw error;
    }
  }

  static async delete(id) {
    const querySql = `DELETE FROM gudang WHERE kode_gudang = ?`;
    try {
      const [result] = await db.execute(querySql, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error deleted data gudang: ", error);
      throw error;
    }
  }
}

module.exports = GudangRepo;
