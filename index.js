const argv = require("yargs").argv;
const logger = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await logger.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const getContacts = await logger.getContactById(id);
      console.log(getContacts);
      break;

    case "add":
      const addContacts = await logger.addContact({ name, email, phone });
      console.log(addContacts);
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "4" });
// invokeAction({
//   action: "add",
//   name: "Bern",
//   email: "Bern@gmail.net",
//   phone: "(692) 999-9999",
// });
