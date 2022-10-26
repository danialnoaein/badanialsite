import Link from "next/link";
import Navigation from "./Navigation/Navigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <header className={`${classes.header}`}>
        <div className='container flex justify-between'>
          <div>
            <Link href='/'>
              <a className={`${classes.brandPersian} max-[540px]:pr-4`}>
                بادانیال
              </a>
            </Link>
            {/* <br />
            <Link href='/'>
              <a className={`${classes.brandEn}`}>BaDanial</a>
            </Link> */}
          </div>

          <Navigation />
        </div>
      </header>

      <main>{props.children}</main>
    </>
  );
};

export default Layout;
