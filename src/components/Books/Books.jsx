import classes from "./Books.module.scss";

const Books = ({ bookData, error }) => {
  if (error) {
    return <p>an error occured: {error}</p>;
  }

  if (!bookData || bookData.length === 0) {
    return;
  }

  const handleTitleLength = (book) => {
    if (book.title.length > 70) {
      return <p className={classes.title}>{book.title.slice(0, 67) + "..."}</p>;
    }
    return <p className={classes.title}>{book.title}</p>;
  };

  return (
    <div className={classes.container}>
      {bookData.map((book, index) => {
        return (
          <div key={index} className={classes.book}>
            <img alt="book image" src={book.image.smallThumbnail} />
            {handleTitleLength(book)}
            <p className={classes.author}>
              {book.author.length > 1
                ? book.author[0] + " et al."
                : book.author[0]}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
