import styles from "./About.module.css";

export default function About() {
	return (
		<div className={styles.about}>
			<div className={styles.skills}>
				<div className={styles.skills__hello}>
					<h2 className={styles.skills__title}>
						Skills<span>.</span>
					</h2>
					<p>
						Меня вдохновляет создание замечательной работы с людьми, которые так
						же, как и я, увлечены созданием чего-то потрясающего.
					</p>
					<div className={styles.skills__imgs}>
						<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
							<img
								src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
								alt="HTML5"
							/>
						</a>
						<a href="https://www.w3schools.com/css/" target="_blank">
							<img
								src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
								alt="CSS3"
							/>
						</a>
						<a
							href="https://getbootstrap.com/docs/3.4/javascript/"
							target="_blank"
						>
							<img
								src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
								alt="Bootstrap"
							/>
						</a>
						<a href="https://www.tailwindcss.com/" target="_blank">
							<img
								src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg"
								alt="Tailwind CSS"
							/>
						</a>
						<a href="https://mui.com/" target="_blank">
							<img
								src="https://profilinator.rishav.dev/skills-assets/mui.png"
								alt="Material UI"
							/>
						</a>
						<a href="https://learn.javascript.ru/" target="_blank">
							<img
								src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
								alt="JavaScript"
							/>
						</a>
						<a href="https://vuejs.org/" target="_blank">
							<img
								src="https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg"
								alt="Vue.js"
							/>
						</a>
						<a href="https://reactjs.org/" target="_blank">
							<img
								src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
								alt="React"
							/>
						</a>
						<a href="https://git-scm.com/" target="_blank">
							<img
								src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
								alt="Git"
							/>
						</a>
						<a href="https://nodejs.org/" target="_blank">
							<img
								src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
								alt="Node.js"
							/>
						</a>
						<a href="https://expressjs.com/" target="_blank">
							<img
								src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
								alt="express.js"
							/>
						</a>
						<a href="https://www.nginx.com/" target="_blank">
							<img
								src="https://profilinator.rishav.dev/skills-assets/nginx-original.svg"
								alt="Nginx"
							/>
						</a>
						<a href="https://socket.io/" target="_blank">
							<img src="https://socket.io/images/logo.svg" alt="socket.io" />
						</a>
					</div>
				</div>
				<div className={styles.skills__items}>
					<div className={styles.skills__item}>
						<h3>Frontend Development</h3>
						<p>
							HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Drupal, Phonegap /
							Cordova, Ionic, Foundation, Angular.js.
						</p>
					</div>
					<div className={styles.skills__item}>
						<h3>Backend Development</h3>
						<p>
							Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB,
							Redis, PostgreSQL, WebStorm.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.education}>
				<div>
					<h2 className={styles.education__title}>
						Education<span>.</span>
					</h2>
					<p>
						Всю свою жизнь я руководствовался твердой верой в то, что
						образование важно. Я стараюсь узнавать что-то новое каждый день.
					</p>
				</div>
			</div>
		</div>
	);
}
