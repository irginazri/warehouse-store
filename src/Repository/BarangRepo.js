const db = require("../config/db");
const barang = require("../Models/BarangModel");

class BarangRepo {
  static async create(data) {
    const {
      nama_barang,
      harga_barang,
      jumlah_barang,
      expired_date,
      kode_gudang,
    } = data;
    const querySql = `INSERT INTO barang(nama_barang, harga_barang, jumlah_barang, expired_data, kode_gudang) VALUE(?, ?, ?, ?, ?)`;
    try {
      const [result] = await db.execute(querySql, [
        nama_barang,
        harga_barang,
        jumlah_barang,
        expired_date,
        kode_gudang,
      ]);
      return result.insertId;
    } catch (error) {
      console.error("Error creating barang:", error);
      throw error;
    }
  }

  static async findAll() {
    const querySql = `SELECT b.*, g.nama_gudang FROM barang b JOIN gudang g on b.kode_gudang = g.kode_gudang`;
    try {
      const [rows] = await db.execute(querySql);
      return rows;
    } catch (error) {
      console.error("Error find all barang: ", error);
      throw error;
    }
  }

  static async findById(id) {
    const querySql = `SELECT * FROM barang WHERE kode_barang = ?`;
    try {
      const [rows] = await db.execute(querySql, [id]);
      if (rows.length === 0) return null;
      const {
        kode_barang,
        nama_barang,
        harga_barang,
        jumlah_barang,
        expired_date,
        kode_gudang,
      } = rows[0];
      return new barang(
        kode_barang,
        nama_barang,
        harga_barang,
        jumlah_barang,
        expired_date,
        kode_gudang
      );
    } catch (error) {
      console.error("Error find by id barang: ", error);
      throw error;
    }
  }

  static async update(id, data) {
    const {
      nama_barang,
      harga_barang,
      jumlah_barang,
      expired_date,
      kode_gudang,
    } = data;
    const querySql = `UPDATE barang SET nama_barang = ?, harga_barang = ?, jumlah_barang = ?, expired_barang = ? WHERE kode_barang = ? `;
    try {
      const [result] = await db.execute(querySql, [
        nama_barang,
        harga_barang,
        jumlah_barang,
        expired_date,
        kode_gudang,
        id,
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error updated data barang: ", error);
      throw error;
    }
  }

  static async delete(id) {
    querySql = `DELETE FROM barang WHERE kode_barang = ? `;
    try {
      const [result] = await db.execute(querySql, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error deleted data barang: ", error);
      throw error;
    }
  }

  static async findExpired() {
    const querySql = `SELECT * FROM barang WHERE expired_date < CURDATE()`;
    try {
      const [rows] = await db.execute(querySql);
      return rows.map(
        (row) =>
          new barang(
            row.kode_barang,
            row.nama_barang,
            row.harga_barang,
            row.jumlah_barang,
            row.expired_date,
            row.kode_gudang
          )
      );
    } catch (error) {
      console.error("Error find expired date barang: ", error);
      throw error;
    }
  }

  static async findExpiredSoon(days) {
    const querySql = `SELECT * FROM barang WHERE expired_date BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL ? DAY)`;
    try {
      const [rows] = await db.execute(querySql, [days]);
      return rows.map(
        (row) =>
          new barang(
            row.kode_barang,
            row.nama_barang,
            row.harga_barang,
            row.jumlah_barang,
            row.expired_date,
            row.kode_gudang
          )
      );
    } catch (error) {
      console.error("Error find expired date soon barang: ", error);
      throw error;
    }
  }
}

module.exports = BarangRepo;
