import { Link } from "react-router-dom";
import styles from "./TheHeader.module.css";

export default function TheHeader() {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.link}>
				<h2 className={styles.logo}>
					Yuriu<span>.</span>
				</h2>
			</Link>

			<nav className={styles.navigation}>
				<Link to="/" className={styles.link}>
					Hello
				</Link>
				<Link to="/about" className={styles.link}>
					About
				</Link>
				<Link to="/portfolio" className={styles.link}>
					Portfolio
				</Link>
			</nav>
		</header>
	);
}
