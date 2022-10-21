import Link from "next/link";
import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${classes.nav}`}>
      <ul>
        <li>
          <Link href='/articles'>Articles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
