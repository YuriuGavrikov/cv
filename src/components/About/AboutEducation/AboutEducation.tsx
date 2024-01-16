import styles from "./AboutEducation.module.css";

export default function AboutEducation() {
	return (
		<div className={styles.education}>
			<div className={styles.education__hello}>
				<h2 className={styles.education__title}>
					Education<span>.</span>
				</h2>
				<p>
					Всю свою жизнь я руководствовался твердой верой в то, что образование
					важно. Я стараюсь узнавать что-то новое каждый день.
				</p>
			</div>
			<div className={styles.education__items}>
				<div className={styles.education__item}>
					<h3>Frontend разработчик</h3>
					<p>2020-2021</p>
					<p>LoftSchool - Школа онлайн обучения IT профессиям</p>
				</div>
				<div className={styles.education__item}>
					<h3>JS: React</h3>
					<p>2021-2022</p>
					<p>Хекслет — онлайн-школа программирования</p>
				</div>
				<div className={styles.education__item}>
					<h3>Современный JavaScript + Vue</h3>
					<p>2022-2023</p>
					<p>www.udemy.com</p>
				</div>
			</div>
		</div>
	);
}
