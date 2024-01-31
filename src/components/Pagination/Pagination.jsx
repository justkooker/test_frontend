import classNames from 'classnames';
import styles from './Pagination.module.scss';

const Pagination = () => {
	return (
		<div className={styles.pagination}>
			<p className={styles.pagination__entries}>
				Showing data 1 to 8 of 256K entries
			</p>
			<div className={styles.pagination__buttons}>
				<button className={styles.pagination__button}>&lt;</button>
				<button
					className={classNames(styles.pagination__button, styles.active)}
				>
					1
				</button>
				<button className={styles.pagination__button}>2</button>
				<button className={styles.pagination__button}>3</button>
				<button className={styles.pagination__button}>4</button>
				<span>...</span>
				<button className={styles.pagination__button}>40</button>
				<button className={styles.pagination__button}>&gt;</button>
			</div>
		</div>
	);
};
export default Pagination;
