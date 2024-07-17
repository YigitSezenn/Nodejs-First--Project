const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    role_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    Permissions:{type:String, required:true},
    creadted_by: { type: mongoose.Schema.Types.ObjectId, required: true },
}, {
    versionKey: false,
    timestamps: true
});

class Role_Privileges extends mongoose.model() {}
schema.loadClass(Role_Privileges);
model.exports = mongoose.model("Role_Privileges", schema);