const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
        role_name: { type: String, required: true },
        is_active: { type: Boolean, default: true },
        created_by: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
    {
      versionKey: false,
    timestamps: true,
  }
);

class Roles extends mongoose.model("Roles", schema) {}
schema.loadClass(Roles);
model.exports = mongoose.model("Roles", schema);
