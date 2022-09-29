const argv = require("yargs").argv;
const logger = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await logger.listContacts();

      break;

    case "get":
      const getContacts = await logger.getContactById(id);
      break;

    case "add":
      const addContacts = await logger.addContact({ name, email, phone });
      break;

    case "remove":
      const removeContacts = await logger.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
