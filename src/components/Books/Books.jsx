import classes from "./Books.module.scss";

const Books = ({ bookData, error }) => {
  if (error) {
    return <p>an error occured: {error}</p>;
  }

  if (!bookData || bookData.length === 0) {
    return;
  }

  return (
    <div className={classes.container}>
      {bookData.map((book, index) => {
        return (
          <div key={index} className={classes.book}>
            <p>{book.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
