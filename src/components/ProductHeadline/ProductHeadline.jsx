import styles from './ProductHeadline.module.scss';

const ProductHeadline = ({ headline, subheading }) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.headline}>{headline}</h3>
			<p className={styles.subheading}>{subheading}</p>
		</div>
	);
};

export default ProductHeadline;
