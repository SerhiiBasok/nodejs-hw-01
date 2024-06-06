import fs from 'fs';
import path from 'path';
import { createFakeContact } from '../utils/createFakeContact.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbFilePath = path.resolve(__dirname, '../db/db.json');

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
