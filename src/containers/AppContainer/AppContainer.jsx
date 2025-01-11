import classes from "./AppContainer.module.scss";
import { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Form from "../../components/Form/Form.jsx";
import Books from "../../components/Books/Books.jsx";
import fetchApi from "../../services/api.js";

const defaultBookValues = {
  image: "",
  author: "",
  title: "",
  description: "",
};

const AppContainer = () => {
  const [bookData, setBookData] = useState(defaultBookValues);

  const onFormSubmit = async (data) => {
    try {
      const books = await fetchApi(data);
      setBookData(books);
    } catch (error) {
      console.error("error fetching books:", error);
    }
  };

  return (
    <div className={classes.container}>
      <Header />
      <Form onSubmit={onFormSubmit} />
      <Books bookData={bookData} />
    </div>
  );
};

export default AppContainer;
