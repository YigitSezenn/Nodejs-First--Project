const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    first_name: String,
    last_name: String,
    phone_number: String,
}, {
    timestamps: true
});

class Users extends mongoose.model() {
    
    }
schema.loadClass(Users);
model.exports = mongoose.model('Users', schema);