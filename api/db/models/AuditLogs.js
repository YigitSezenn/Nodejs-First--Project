const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    level: { type: String },
    email: { type: String },
    location: { type: String },
    proct_type: { type: String },
    log: { type: String },
    

}, {
    versionKey: false,
    timestamps: true
});

class AuditLogs extends mongoose.model() {}
schema.loadClass(AuditLogs);
model.exports = mongoose.model("Audit_Logs", schema);