const mongoose = require('./connection');
const { Schema, model } = mongoose;

const logsSchema = new Schema({
    title:  { type: String, required: true },
    entry:  { type: String, required: true },
    shipIsBrokem: Boolean
});

const Log = model('Log', logsSchema);

module.exports = Log;
