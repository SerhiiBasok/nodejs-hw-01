const fs = require('fs');
const { createFakeContact } = require('../utils/createFakeContact');
const { PATH_DB } = require('../constants/contacts');

const readContacts = () => {
  try {
    const data = fs.readFileSync(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

const writeContacts = (contacts) => {
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
};

const generateContacts = (numberOfContacts) => {
  const existingContacts = readContacts();
  const newContacts = Array.from(
    { length: numberOfContacts },
    createFakeContact,
  );
  const updatedContacts = [...existingContacts, ...newContacts];
  writeContacts(updatedContacts);
};

generateContacts(5);
