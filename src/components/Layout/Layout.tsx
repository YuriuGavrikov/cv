import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import TheHeader from "../TheHeader/TheHeader";
import TheFooter from "../TheFooter/TheFooter";

export default function Layout() {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.container} ${styles.stickyHeader}`}>
				<TheHeader />
			</div>
			<main>
				<div className={styles.container}>
					<Outlet />
				</div>
			</main>
			<div className={styles.container}>
				<TheFooter />
			</div>
		</div>
	);
}
