
///////new 19-1-26//////////////////


// server/models/Faulty.js
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    item: { type: String, required: true },
    description: String,
    qty: { type: Number, required: true, min: 1, default: 1 },
    unit: { type: String, default: "pcs" },
  },
  { _id: false }
);

const faultySchema = new mongoose.Schema(
  {
    faulty_no: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    report_date: { type: Date, default: Date.now },
    return_date: Date,
    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Repaired", "Replaced", "Rejected"],
      default: "Pending",
    },
    logo: String, // base64 logo
    reported_by: {
      name: { type: String, required: true },
      department: String,
      phone: String,
      email: String,
      address: String,
    },
    return_reason: String,
    items: {
      type: [itemSchema],
      validate: [v => v.length > 0, "At least one item is required"],
    },
    notes: String,
    reference_name_for_note: String,
    reference_mobile_for_note: String,
    reference_address_for_note: String,
  },
  { timestamps: true }
);

export default mongoose.model("Faulty", faultySchema);
