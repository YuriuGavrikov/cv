import styles from "./AboutSkills.module.css";

export default function AboutSkills() {
	const skillsImgs = [
		{
			link: "https://en.wikipedia.org/wiki/HTML5",
			img: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg",
			alt: "HTML5",
		},
		{
			link: "https://www.w3schools.com/css/",
			img: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg",
			alt: "CSS3",
		},
		{
			link: "https://getbootstrap.com/docs/3.4/javascript/",
			img: "https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg",
			alt: "Bootstrap",
		},
		{
			link: "https://www.tailwindcss.com/",
			img: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg",
			alt: "Tailwind CSS",
		},
		{
			link: "https://mui.com/",
			img: "https://profilinator.rishav.dev/skills-assets/mui.png",
			alt: "Material UI",
		},

		{
			link: "https://learn.javascript.ru/",
			img: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
			alt: "JavaScript",
		},
		{
			link: "https://vuejs.org/",
			img: "https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg",
			alt: "Vue",
		},
		{
			link: "https://reactjs.org/",
			img: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
			alt: "React",
		},
		{
			link: "https://git-scm.com/",
			img: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
			alt: "Git",
		},
		{
			link: "https://nodejs.org/",
			img: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg",
			alt: "Node.js",
		},
		{
			link: "https://expressjs.com/",
			img: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg",
			alt: "express.js",
		},
		{
			link: "https://www.nginx.com/",
			img: "https://profilinator.rishav.dev/skills-assets/nginx-original.svg",
			alt: "Nginx",
		},
		{
			link: "https://socket.io/",
			img: "https://socket.io/images/logo.svg",
			alt: "socket.io",
		},
	];
	return (
		<div className={styles.skills}>
			<div className={styles.skills__hello}>
				<h2 className={styles.skills__title}>
					Skills<span>.</span>
				</h2>
				<p>
					Меня вдохновляет создание полезных и качественных продуктов с людьми,
					которые так же, как и я, увлечены созданием чего-то потрясающего.
				</p>
				<div className={styles.skills__imgs}>
					{skillsImgs.map((item) => (
						<a key={item.alt} href={item.link} target="_blank">
							<img src={item.img} alt={item.alt} />
						</a>
					))}
				</div>
			</div>
			<div className={styles.skills__items}>
				<div className={styles.skills__item}>
					<h3>Frontend Development</h3>
					<p>
						HTML, CSS, Javascript
						<br />
						Vue ( Vue Router / Pinia / Vite )
						<br />
						React ( React Router / Redux / React Hooks / Webpack )
						<br />
						Bootstrap, Tailwind, Material UI, LESS, SASS
					</p>
				</div>
				<div className={styles.skills__item}>
					<h3>Backend Development</h3>
					<p>Javascript, Node.js, Express.js, Nginx, Socket.IO</p>
				</div>
			</div>
		</div>
	);
}
