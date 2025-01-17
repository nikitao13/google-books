import classes from "./Form.module.scss";
import { useState } from "react";
import validateForm from "../../services/validator.js";
import { GiSpellBook } from "react-icons/gi";

const Form = ({ onSubmit }) => {
  const [formState, setFormState] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    onSubmit(formState);
    setFormState("");
  };

  const handleInput = (e) => {
    setFormState(e.target.value);
  };

  const { isValid, error } = validateForm(formState);

  return (
    <form className={classes.form} onSubmit={handleForm}>
      <div className={classes.header}>
        <h1 className={classes.text}>google-books api</h1>
        <GiSpellBook />
      </div>

      <div className={classes.searchContainer}>
        <input
          id="query"
          className={classes.searchField}
          name="query"
          placeholder="search for books"
          type="text"
          value={formState}
          onChange={handleInput}
          autoComplete="off"
        />
        <button className={classes.btn} type="submit" disabled={!isValid}>
          search
        </button>
      </div>

      <small className={classes.error}>{error ?? "\u00A0"}</small>
    </form>
  );
};

export default Form;
