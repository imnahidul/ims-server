
////////////31-01-2026////////////////////

import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    item: { type: String,  },
    description: String,
    qty: { type: Number, required: true, min: 1, default: 1 },
    unit: { type: String, default: "pcs" },
    remark: String, // Added as per your request 
  },
  { _id: false }
);

const gatePassSchema = new mongoose.Schema(
  {
    gate_pass_no: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    date: { type: Date, default: Date.now },
    type: {
      type: String,
      enum: ["Returnable", "Non-Returnable"],
      default: "Returnable",
    },
    office_address: String,
    location: String,
    phone: String,
    hotline: String,
    telephone: String,
    logo: String, // base64 data URL
    reported_by: {
      name: { type: String, required: true },
      department: String,
      phone: String,
      email: String,
      address: String,
    },
    items: {
      type: [itemSchema],
      validate: [v => v.length > 0, "At least one item is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("GatePass", gatePassSchema);


