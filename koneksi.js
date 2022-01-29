var mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi-nodejs'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Koneksi mysql berhasil');
});

module.exports = conn;