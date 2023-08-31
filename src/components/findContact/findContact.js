import React from "react";
import { useFilterParams } from "hooks/useFilterParams";

const FindContact = () => {
  const { filter, onChange } = useFilterParams();

  return (
    <div>
      <h4>Find contacts by name</h4>
      <input type="text" name="name" value={filter} onChange={onChange}></input>
    </div>
  );
};

export default FindContact;
