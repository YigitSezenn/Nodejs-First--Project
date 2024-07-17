const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
        role_ıd: { type: mongoose.Schema.Types.ObjectId, required: true },
        user_id: { type: mongoose.Schema.Types.ObjectId, required: true },

    },
  
    {
        versionKey: false,
    timestamps: true,
  }
);

class UserRoles extends mongoose.model() {}
schema.loadClass(UserRoles);
model.exports = mongoose.model("UserRoles", schema);
