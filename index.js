const contacts = require("./contacts.js");

const testActions = async (action, id, name, email, phone) => {
  switch (action) {
    case "getContacts":
      const contactsList = await contacts.listContacts();
      console.log(contactsList);
      break;

    case "getContactById":
      const contactById = await contacts.getContactById(id);
      console.log(contactById);
      break;

    case "removeContact":
      const removedContact = await contacts.removeContact(id);
      console.log(removedContact);
      break;

    case "addContact":
      console.log("check");
      const addedContact = await contacts.addContact(name, email, phone);
      console.log(addedContact);
      break;

    default:
      console.log("Unknown action");
      break;
  }
};
