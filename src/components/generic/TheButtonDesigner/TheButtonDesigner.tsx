import styles from "./TheButtonDesigner.module.css";

type Props = {
	children: string;
	setIsModal?: (value: boolean) => void;
	submitMessage?: (value?: boolean) => void;
};

export default function TheButtonDesigner({
	children,
	setIsModal,
	submitMessage,
}: Props) {
	return (
		<button
			className={styles.button}
			type="button"
			onClick={() => {
				setIsModal ? setIsModal(true) : null;
				submitMessage ? submitMessage() : null;
			}}
		>
			{children}
		</button>
	);
}
