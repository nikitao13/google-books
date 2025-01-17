import BookModal from "../BookModal/BookModal";
import classes from "./Books.module.scss";
import { useState } from "react";

const Books = ({ bookData }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  if (!bookData || bookData.length === 0) {
    return;
  }

  const handleTitleLength = (book) => {
    if (book.title.length > 60) {
      return <p className={classes.title}>{book.title.slice(0, 57) + "..."}</p>;
    }
    return <p className={classes.title}>{book.title}</p>;
  };

  const handleBookClick = (book) => {
    console.log(book);
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <>
      {selectedBook && (
        <BookModal selectedBook={selectedBook} closeModal={closeModal} />
      )}

      <div className={classes.container}>
        {bookData.map((book, index) => {
          return (
            <div
              key={index}
              className={classes.book}
              onClick={() => handleBookClick(book)}
            >
              <img
                className={classes.img}
                alt={book.title}
                loading="lazy"
                src={
                  book.image === "No image"
                    ? "https://placehold.co/120x155"
                    : book.image.thumbnail
                }
              />
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
    </>
  );
};

export default Books;
