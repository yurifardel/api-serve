const connection = require("../data/connect");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection("completed").count();

    const completed = await connection("completed")
      .join("controller", "controller.id", "=", "completed.controller_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "completed.*",
        "controller.name",
        "controller.email",
        "controller.phone",
        "controller.city",
      ]);

    res.header("X-Total-Count", count["count(*)"]);
    console.log(count);

    return res.json(completed);
  },

  async create(req, res) {
    const { brand, object, value } = req.body;

    const controller_id = req.headers.authorization;

    const [id] = await connection("completed").insert({
      brand,
      object,
      value,
      controller_id,
    });

    return res.json({ id });
  },
};
