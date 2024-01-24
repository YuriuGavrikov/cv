import styles from "./About.module.css";

import AboutEducation from "./AboutEducation/AboutEducation";
import AboutSkills from "./AboutSkills/AboutSkills";

export default function About() {
	return (
		<div className={styles.about}>
			<AboutSkills />
			<hr className={styles.hrShelf} />
			<AboutEducation />
		</div>
	);
}
