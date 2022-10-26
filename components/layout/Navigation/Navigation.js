import Link from "next/link";
import { useEffect, useState } from "react";
import { getWindowDimensions } from "../../../utils/windowDimensions";
import classes from "./Navigation.module.css";
const Navigation = () => {
  console.log();
  const [showMenu, setShowMenu] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    }
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowDimensions.width < 540 && (
        <>
          <div
            className='text-3xl p-4'
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu ? "❌" : "🍔"}
          </div>

          <nav
            className={`text-center ${classes.nav} ${
              showMenu ? "visible" : "hidden"
            }`}
          >
            <ul>
              <li onClick={() => setShowMenu((prev) => !prev)}>
                <Link href='/'>نوشته ها 📝</Link>
              </li>
              <li onClick={() => setShowMenu((prev) => !prev)}>
                <Link href='/resume'>رزومه 💪</Link>
              </li>
              <li onClick={() => setShowMenu((prev) => !prev)}>
                <Link href='/contact'>تماس با من ☎️</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
      {windowDimensions.width >= 540 && (
        <nav className={`text-center ${classes.nav}`}>
          <ul>
            <li>
              <Link href='/'>نوشته ها 📝</Link>
            </li>
            <li>
              <Link href='/resume'>رزومه 💪</Link>
            </li>
            <li>
              <Link href='/contact'>تماس با من ☎️</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
