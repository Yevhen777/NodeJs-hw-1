const fs = require("fs/promises");
const contactsPath = require("path");
const { nanoid } = require("nanoid");
const path = contactsPath.join(__dirname, "contacts.json");

const listContacts = async () => {
  const readFileContacts = await fs.readFile(path, "utf-8");

  return JSON.parse(readFileContacts);
};

const getContactById = async (id) => {
  const getFileContacts = await listContacts();
  const contactId = String(id);
  const contact = getFileContacts.find((item) => item.id === contactId);

  return contact || null;
};

const addContact = async (data) => {
  const myContact = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  myContact.push(newContact);

  await fs.writeFile(path, JSON.stringify(myContact, null, 2));

  return newContact;
};

const removeContact = async (id) => {
  const removeContact = await listContacts();
  const removeContactId = String(id);
  const index = removeContact.findIndex((item) => item.id === removeContactId);
  if (index === -1) {
    return null;
  }
  const [remove] = removeContact.splice(index, 1);
  await fs.writeFile(path, JSON.stringify(removeContact, null, 2));
  return remove;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
