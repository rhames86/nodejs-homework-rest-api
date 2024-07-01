const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  const result = await Contact.find(favorite, "", { skip, limit }).populate(
    "name email"
  );
  res.json(result);
};

module.exports = getAll;
