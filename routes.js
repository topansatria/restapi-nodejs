'use strict';

module.exports = function(app) {
    var json = require('./controller');

    // routes index
    app.route('/').get(json.index);

    // routes tampil semua data mahasiswa
    app.route('/tampil').get(json.tampilSemuaData);

    // routes tampil data mahasiswa berdasarkan id
    app.route('/tampil/:id').get(json.tampilById);
}