///////new 19-1-26///////////////

// server/controllers/faultyController.js
import Faulty from "../models/Faulty.js";

export const addFaulty = async (req, res) => {
  try {
    const data = req.body;
    const exists = await Faulty.findOne({ faulty_no: data.faulty_no });
    if (exists) return res.status(400).json({ success: false, message: "Faulty no already exists" });

    const faulty = new Faulty(data);
    await faulty.save();
    res.status(201).json({ success: true, faulty: faulty });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getFaultys = async (req, res) => {
  try {
    const list = await Faulty.find().sort({ createdAt: -1 });
    res.json({ success: true, faultys: list });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateFaulty = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.body.faulty_no) {
      const exists = await Faulty.findOne({
        faulty_no: req.body.faulty_no,
        _id: { $ne: id }
      });
      if (exists) return res.status(400).json({ success: false, message: "Faulty no already used" });
    }

    const updated = await Faulty.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, faulty: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteFaulty = async (req, res) => {
  try {
    const deleted = await Faulty.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};