const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    is_active: { type: Boolean, default: true, },
    created_by:{type: mongoose.Schema.Types.ObjectId, required: true},
}, {
    versionKey: false,
    timestamps: true
});

class Categories extends mongoose.model() {}
schema.loadClass(Categories);
model.exports = mongoose.model("Categories", schema);