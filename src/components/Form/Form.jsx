import classes from "./Form.module.scss";
import { useState } from "react";

const defaultFormValues = {
  image: "",
  author: "",
  title: "",
  description: ""
}

const Form = () => {
  const [formState, setFormState] = useState(defaultFormValues);

  return (
    <form className={classes.form}>

    </form>
  )
};

export default Form
