import classes from "./AppContainer.module.scss";
import { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Form from "../../components/Form/Form.jsx";
import Books from "../../components/Books/Books.jsx";
import BeatLoader from "react-spinners/BeatLoader";

const AppContainer = () => {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api?search=${data}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("error fetching books from API");
      }

      const books = await response.json();
      setBookData(books);
      setError("");
    } catch (error) {
      console.error("error fetching books:", error);
      setError("error fetching books. please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <Header />
      <Form onSubmit={onFormSubmit} />
      {error && <p className={classes.error}>{error}</p>}
      {isLoading ? (
        <BeatLoader
          className={classes.loader}
          loading={isLoading}
          color="#57C4DC"
          size={15}
        />
      ) : (
        <Books bookData={bookData} />
      )}
    </div>
  );
};

export default AppContainer;
