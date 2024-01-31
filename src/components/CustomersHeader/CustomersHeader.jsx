import styles from './CustomersHeader.module.scss';
import Search from '../Search';
import ProductHeadline from '../ProductHeadline';

const CustomersHeader = () => {
	return (
		<div className={styles.container}>
			<ProductHeadline headline='All Customers' subheading='Active Members' />
			<Search />
		</div>
	);
};
export default CustomersHeader;
