import GatePass from "../models/GatePass.js";

export const addGatePass = async (req, res) => {
  try {
    const data = req.body;
    const exists = await GatePass.findOne({ gate_pass_no: data.gate_pass_no });
    if (exists) return res.status(400).json({ success: false, message: "Gate Pass no already exists" });

    const gatePass = new GatePass(data);
    await gatePass.save();
    res.status(201).json({ success: true, gatePass: gatePass });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getGatePasses = async (req, res) => {
  try {
    const list = await GatePass.find().sort({ createdAt: -1 });
    res.json({ success: true, gatePasses: list });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateGatePass = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.body.gate_pass_no) {
      const exists = await GatePass.findOne({
        gate_pass_no: req.body.gate_pass_no,
        _id: { $ne: id }
      });
      if (exists) return res.status(400).json({ success: false, message: "Gate Pass no already used" });
    }

    const updated = await GatePass.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, gatePass: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteGatePass = async (req, res) => {
  try {
    const deleted = await GatePass.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};


//////////////31-01-2026/////////////


