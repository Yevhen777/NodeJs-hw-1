const fs = require("fs/promises");
const contactsPath = require("path");
// const { nanoid } = require("nanoid");
const path = contactsPath.join(__dirname, "contacts.json");

const listContacts = async () => {
  const readFileContacts = await fs.readFile(path, "utf-8");

  return JSON.parse(readFileContacts);
};

const getContactById = async (id) => {
  const getFileContacts = await listContacts();
  const contacts = getFileContacts.find(
    (item) => Number(item.id) === Number(id)
  );

  return contacts || null;
};

const addContact = async (contacts) => {
  const myContact = await listContacts();
  console.log(myContact);
  const newContact = {
    id: 77,
    ...contacts,
  };
  myContact.push(newContact);

  await fs.writeFile(path, JSON.stringify(myContact, null, 2));

  return newContact;
};

const removeContact = async (id) => {
  const removeContact = await listContacts();
  const index = removeContact.findIndex(
    (item) => Number(item.id) === Number(id)
  );
  if (index === -1) {
    return null;
  }
  const [result] = removeContact.splice(index, 1);
  await fs.writeFile(path, JSON.stringify(removeContact, null, 2));
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
