import React from "react";
import { Field } from "formik";
import { useFilterParams } from "hooks/useFilterParams";

const FindContact = () => {
  const { filter, onChange } = useFilterParams();

  return (
    <div>
      <h4>Find contacts by name</h4>
      <Field type="text" name="name" value={filter} onChange={onChange}></Field>
    </div>
  );
};

export default FindContact;
