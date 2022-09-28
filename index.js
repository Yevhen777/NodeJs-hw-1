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
      const removeContacts = await logger.removeContact(id);
      console.log(removeContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
