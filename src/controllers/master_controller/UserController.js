const model = require("../../models/user.model");
const api = require("../../tools/common");

const insertUser = async (req, res) => {
  const newUser = req.body;
  try {
    let data = await model.insert(newUser);
    return api.ok(res, data);
  } catch (e) {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  insertUser,
};
