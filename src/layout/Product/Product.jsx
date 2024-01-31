import Customers from '../../components/Customers';
import Greet from '../Greet/Greet';
import styles from './Product.module.scss';
const Product = () => {
	return (
		<div className={styles.product}>
			<Greet name='Evano' />
			<Customers />
			
		</div>
	);
};
export default Product;
