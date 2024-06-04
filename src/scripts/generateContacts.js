const fs = require('fs');
const path = require('path');
const { createFakeContact } = require('../utils/createFakeContact');
const { PATH_DB } = require('../db/db.json');

const dbFilePath = path.resolve(__dirname, PATH_DB);

const readContacts = () => {
  try {
    const data = fs.readFileSync(dbFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

const writeContacts = (contacts) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(contacts, null, 2), 'utf-8');
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
