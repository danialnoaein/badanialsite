import Link from "next/link";
import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`text-center ${classes.nav}`}>
      <ul className='flex'>
        <li>
          <Link href='/'>نوشته ها 📝</Link>
          <Link href='/resume'>رزومه 💪</Link>
          <Link href='/contact'>تماس با من ☎️</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
