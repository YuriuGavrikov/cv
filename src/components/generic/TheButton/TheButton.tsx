import styles from "./TheButton.module.css";

type Props = {
	children: string;
	setIsModal?: (value: boolean) => void;
};
export default function TheButton({ children, setIsModal }: Props) {
	return (
		<button
			className={styles.button}
			type="button"
			onClick={() => (setIsModal ? setIsModal(false) : null)}
		>
			{children}
		</button>
	);
}
