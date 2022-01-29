'use strict';

var ress = require('./res');
var conn = require('./koneksi');
const e = require('express');
const Connection = require('mysql/lib/Connection');

exports.index = function(req, res) {
    ress.ok('Respone Sukses', res)
}

// menampilkan semua data mahasiswa
exports.tampilSemuaData = function(req, res) {
    conn.query('SELECT * FROM tbl_mahasiswa', function(err, rows, fileds) {
        if (err) {
            conn.log(err);
        } else {
            ress.ok(rows, res);
        }
    });
}