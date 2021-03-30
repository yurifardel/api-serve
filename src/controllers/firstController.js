const crypto = require("crypto");

module.exports = {
  async create(req, res) {
    const { name, email, phone, city } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    return res.json({ id, name, email, phone, city });
  },
};
