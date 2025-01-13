import classes from "./Header.module.scss";
import { FaBook } from "react-icons/fa";

const Header = () => {
  return (
    <div className={classes.header}>
        <h1>bookfinder</h1>
        <FaBook />
    </div>
  );
};

export default Header;
