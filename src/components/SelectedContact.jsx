import { useEffect, useState } from "react";
import "./App.jsx";

export default function ContactList({setSelectedContactId}) {
    const [contacts, setContacts] = useState([]);
    const ContactList=({setSelectedContactId})
    useEffect(() => {
      async function fetchContacts() {
        try {
         
          const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
          const result = await response.json();
         setContacts(result);
    
        } catch (error) {
          console.error(error);
        }
      }
      fetchContacts()
    }, []);
}