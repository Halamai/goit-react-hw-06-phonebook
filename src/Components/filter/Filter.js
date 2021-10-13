import React from "react";
import s from "./Filter.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/actions";
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  return (
    <label className={s.filterinput}>
      Find contacs by name:
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
