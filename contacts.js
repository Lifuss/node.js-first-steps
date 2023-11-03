const { table } = require("console");
const fs = require("fs/promises");
const path = require("path");
const nanoid = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const updateContacts = async (freshContacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(freshContacts, null, 2));
};

// TODO: задокументувати кожну функцію
async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const searchedById = contacts.find((item) => item.id === contactId);

  if (!searchedById) {
    return null;
  }
  return searchedById;
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);

  if (index === -1) return null;

  const [result] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return result;
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
  const contacts = await listContacts();
  const body = { id: nanoid.nanoid(), name, email, phone };

  contacts.push(body);
  await updateContacts(contacts);
  return body;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
