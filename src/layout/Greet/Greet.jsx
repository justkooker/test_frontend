import styles from './Greet.module.scss';
const Greet = ({ name }) => {
	return (
		<div className={styles.greet}>
			<h4 className={styles.greet__text}>Hello</h4>
			<span className={styles.greet__name}>{name}</span>
			<span className={styles.greet__applause}>👋🏼</span>
			<span>,</span>
		</div>
	);
};
export default Greet;
