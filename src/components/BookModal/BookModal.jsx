import classes from "./BookModal.module.scss";

const BookModal = ({ selectedBook, closeModal }) => {
  return (
    <div className={classes.overlay} onClick={() => closeModal()}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <header className={classes.header}>
          <p className={classes.headerTitle}>{selectedBook.title}</p>
          <p className={classes.x} onClick={() => closeModal()}>
            x
          </p>
        </header>
        <main className={classes.main}>
          <p>{selectedBook.description}</p>
        </main>
      </div>
    </div>
  );
};

export default BookModal;
