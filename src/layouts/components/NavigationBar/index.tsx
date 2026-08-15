import { NavLink } from "react-router-dom";
import styles from "./index.module.css"

export default function NavigationBar() {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink>
        <NavLink to="/tools" className={({ isActive }) => isActive ? styles.active : ""}>Tools</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>About</NavLink>
      </nav>
    </>
  )
}
