import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm'
import ContactList from '../../Components/ContactList/ContactList';
import Filter from '../../Components/Filter/Filter';
import s from './ContactsView.module.css';

function ContactsView() {
    return (
        <>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={s.title}>Contacts</h2>
            <Filter />
            <ContactList />
        </>
    )
};
export default ContactsView;