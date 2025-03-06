import { useId } from "react";
import { filter_wrapper, filter_input } from "./SearchBox.module.css";

function SearchBox({ value, searchContact }) {
  const filterId = useId();

  return (
    <div className={filter_wrapper}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={filter_input}
        type="text"
        name="filter"
        id={filterId}
        value={value}
        onChange={(e) => searchContact(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
