import React from 'react';
import ContactForm from '../Components/ContactForm/ContactForm'
import ContactList from '../Components/ContactList/ContactList';
import Filter from '../Components/Filter/Filter';

const ContactsView = () => {
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </>
    )
};
export default ContactsView;