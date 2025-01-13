import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.text}>
        created by{" "}
        <a href="https://github.com/nikitao13" target="_blank">
          nikitao13
        </a>
      </p>
    </footer>
  );
};

export default Footer;
