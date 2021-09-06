const fs = require('fs/promises')
// const contacts = require('./contacts.json')
const path = require('path')
const { v4 } = require('uuid')

const contactsPath = path.join(__dirname, 'contacts.json')

const updateContacts = async (contacts) => {
  const contactToString = JSON.stringify(contacts)
  await fs.writeFile(contactsPath, contactToString)
}

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath)
    const contacts = await JSON.parse(data)
    return contacts
  } catch (error) {
    console.log(error)
  }
}

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts()
    const searchedContact = await contacts.find(({ id }) => id === contactId)
    if (!searchedContact) {
      return null
    }
    return searchedContact
  } catch (error) {
    console.log(error)
  }
}

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts()
    const contactIndex = await contacts.findIndex(({ id }) => id === contactId)
    if (contactIndex === -1) {
      return null
    }
    const newContacts = await contacts.filter(({ id }) => id !== contactId)
    updateContacts(newContacts)

    return contacts[contactIndex]
  } catch (error) {
    console.log(error)
  }
}

const addContact = async (body) => {
  try {
    const newContactObj = {
      id: v4(),
      ...body
    }
    const contacts = await listContacts()
    const newContacts = [...contacts, newContactObj]
    updateContacts(newContacts)
    return newContactObj
  } catch (error) {}
}

const updateContact = async (contactId, body) => {
  try {
    const contacts = await listContacts()
    const contactIndex = await contacts.findIndex(({ id }) => id === contactId)
    if (contactIndex === -1) {
      return null
    }
    contacts[contactIndex] = { ...contacts[contactIndex], ...body }
    await updateContacts(contacts)
    return contacts[contactIndex]
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
