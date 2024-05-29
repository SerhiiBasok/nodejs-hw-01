import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

const writeContacts = async (contacts) => {
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
};

export const addOneContact = async () => {
  const existingContacts = await readContacts();
  const newContact = createFakeContact();
  const updatedContacts = [...existingContacts, newContact];
  await writeContacts(updatedContacts);
};

await addOneContact();
