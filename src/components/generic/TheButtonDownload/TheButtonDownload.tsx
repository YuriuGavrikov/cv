import styles from "./TheButtonDownload.module.css";

type Props = {
	children: String;
};
export default function TheButtonDownload({ children }: Props) {
	return (
		<a
			className={styles.button}
			href="./cv_pdf/cv.pdf"
			download="Гавриков Юрий Валерьевич.pdf"
		>
			{children}
		</a>
	);
}
