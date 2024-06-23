class BarangModels {
  constructor(
    kode_barang,
    nama_barang,
    harga_barang,
    jumlah_barang,
    expired_date,
    kode_gudang
  ) {
    this.kode_barang = kode_barang;
    this.nama_barang = nama_barang;
    this.harga_barang = harga_barang;
    this.jumlah_barang = jumlah_barang;
    this.expired_date = expired_date;
    this.kode_gudang = kode_gudang;
  }
}

module.exports = BarangModels;
