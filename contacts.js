const fs = require("fs").promises;
// const contactsPath = require("path");
// const path = contactsPath;

function listContacts() {
  const readFilContacts = fs.readFile(`${__dirname}/contacts.json,`[options]);
}

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
