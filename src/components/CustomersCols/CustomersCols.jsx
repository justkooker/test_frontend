import styles from './CustomersCols.module.scss';
const CustomersCols = () => {
    return (
			<div className={styles.cols}>
				<ul className={styles.cols__list}>
					<li className={styles.cols__item}>Customer Name</li>
					<li className={styles.cols__item}>Company</li>
					<li className={styles.cols__item}>Phone Number</li>
					<li className={styles.cols__item}>Email</li>
					<li className={styles.cols__item}>Country</li>
					<li className={styles.cols__item}>Status</li>
				</ul>
			</div>
		);
};
export default CustomersCols;
