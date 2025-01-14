import classes from "./BookModal.module.scss";
import { FaBook } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const BookModal = ({ selectedBook, closeModal }) => {
  return (
    <div className={classes.overlay} onClick={() => closeModal()}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <header className={classes.header}>
          <div className={classes.logo}>
            <h5 className={classes.headerTitle}>bookfinder</h5>
            <FaBook className={classes.icon} />
          </div>
          <IoCloseOutline className={classes.x} onClick={() => closeModal()} />
        </header>
        <main className={classes.main}>
          <div className={classes.group}>
            <h5 className={classes.bookTitle}>{selectedBook.title}</h5>
            {selectedBook.subtitle !== "No subtitle" && (
              <em>
                <p className={classes.subtitle}>{selectedBook.subtitle}</p>
              </em>
            )}
          </div>

          <div className={classes.group}>
            <h5>Author</h5>
            <p>{selectedBook.author.join(", ")}</p>
          </div>

          {selectedBook.publisher !== "No publisher" && (
            <div className={classes.group}>
              <h5>Publisher</h5>
              <p>{selectedBook.publisher}</p>
            </div>
          )}

          <div className={classes.group}>
            <h5>Description</h5>
            <p>{selectedBook.description}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookModal;
