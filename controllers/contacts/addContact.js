const { Contact } = require("../../models/contact");
const { HttpError } = require("../../utils");

const addContact = async (req, res) => {
  const { email } = req.body;
  const contact = await Contact.findOne({ email });

  if (contact) {
    throw HttpError(409, "Contact already exists");
  }
  const result = await Contact.create({ ...req.body });
  res.status(201).json(result);
};

module.exports = addContact;
