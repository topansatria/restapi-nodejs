'use strict';

var ress = require('./res');
var conn = require('./koneksi');

exports.index = function(req, res) {
    ress.ok('Respone Sukses', res)
}

// menampilkan semua data mahasiswa
exports.tampilSemuaData = function(req, res) {
    conn.query('SELECT * FROM tbl_mahasiswa', 
    function(err, rows, fileds) {
        if (err) {
            console.log(err);
        } else {
            ress.ok(rows, res);
        }
    });
}

// menampilkan semua data mahasiswa
exports.tampilById = function(req, res) {
    let id = req.params.id;

    conn.query('SELECT * FROM tbl_mahasiswa WHERE idMahasiswa = ?', [id], 
    function(err, rows, fileds) {
        if (err) {
            console.log(err);
        } else {
            ress.ok(rows, res);
        }
    });
}