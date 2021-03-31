const crypto = require("crypto");

const connection = require("../data/connect");

module.exports = {
  async index(req, res) {
    const organization = await connection("controller").select("*");

    return res.json(organization);
  },

  async create(req, res) {
    const { name, email, phone, city } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("controller").insert({
      id,
      name,
      email,
      phone,
      city,
    });

    return res.json({ id });
  },
};
