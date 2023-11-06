const contacts = require("./contacts.js");
// yargs
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

// commander

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.table(contactsList);
      break;

    case "get":
      const contactById = await contacts.getContactById(id);
      console.log(contactById);
      break;

    case "add":
      const addedContact = await contacts.addContact(name, email, phone);
      console.log(addedContact);
      break;

    case "remove":
      const removedContact = await contacts.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

// yargs
const array = hideBin(process.argv);
const { argv } = yargs(array);
invokeAction(argv);
