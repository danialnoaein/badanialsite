import Link from "next/link";
import Navigation from "./Navigation/Navigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <header>
        <div className={`${classes.brand}`}>
          <Link href='/'>
            <a className={`${classes.brandPersian}`}>بادانیال</a>
          </Link>
          <br />
          <Link href='/'>
            <a className={`${classes.brandEn}`}>BaDanial</a>
          </Link>
        </div>
        <Navigation />
      </header>

      <main>{props.children}</main>
    </>
  );
};

export default Layout;
