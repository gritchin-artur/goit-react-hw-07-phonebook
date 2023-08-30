import React from "react";
import css from "./contactList.module.css";

import { useContactsParams } from "hooks/useContactsParams";

const ContactsList = () => {
  const {
    deleteContact,
    isFetching,
    contacts,
    contactsList,
    isDeleting,
  } = useContactsParams();

  return (
    <ul className={css.contactList}>
      {isFetching && <h2>Loading...</h2>}
      {contacts &&
        contactsList.map(({ id, name, number }) => (
          <li key={id} id={id}>
            {name}: {number}
            <button
              className={css.contactButton}
              type="submit"
              onClick={() => {
                deleteContact(id);
              }}
              disabled={isDeleting}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactsList;
