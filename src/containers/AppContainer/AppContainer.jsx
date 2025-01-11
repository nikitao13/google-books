import classes from "./AppContainer.module.scss";
import { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Form from "../../components/Form/Form.jsx";
import fetchApi from "../../services/api.js";

const AppContainer = () => {
  const [bookData, setBookData] = useState(null);

  const onFormSubmit = (data) => {
    fetchApi(data);
  };

  return (
    <div className={classes.container}>
      <Header />
      <Form />
    </div>
  );
};

export default AppContainer;
