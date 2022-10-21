import Link from "next/link";
import Navigation from "./Navigation/Navigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <header>
        <div className={`${classes.brand}`}>
          <Link href='/'>
            <>
              <div style={{ fontSize: "2rem" }}>بادانیال</div>
              <div style={{ fontSize: "12px", marginTop: "12px", color: "" }}>
                - BaDanial -\
              </div>
            </>
          </Link>
        </div>
        <Navigation />
      </header>

      <main>{props.children}</main>
    </>
  );
};

export default Layout;
