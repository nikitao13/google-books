import classes from "./Form.module.scss";
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formState, setFormState] = useState(null);

  return <form className={classes.form} onSubmit={onSubmit}></form>;
};

export default Form;
