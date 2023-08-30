import React from "react";
import { Field, ErrorMessage } from "formik";
import css from "./inputPhoneBook.module.css";
import { useInputParams } from "hooks/useInputParams";

export default function InputPhoneBook() {
  const {
    name,
    number,
    handleSubmit,
    handleChange,
    isLoading,
  } = useInputParams();

  return (
    <div>
      <form type="submit" onSubmit={handleSubmit} className={css.formContainer}>
        <label className={css.labelStyle}>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </label>
        <label className={css.labelStyle}>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className={css.buttonAddStyle}
        >
          Add contact
        </button>
        <ErrorMessage name="name" component="div" />
      </form>
    </div>
  );
}
