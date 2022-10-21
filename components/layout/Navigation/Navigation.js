import Link from "next/link";
import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`text-center ${classes.nav}`}>
      <ul>
        <li>
          <Link href='/articles'>نوشته ها</Link>
          <Link href='/resume'>رزومه</Link>
          <Link href='/contact'>تماس با من</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
