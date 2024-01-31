import Icon from '../Icon';
import styles from './Logo.module.scss';
import sprite from '../../assets/icons/iconSprite.svg';
const Logo = () => {

	return (
		<div className={styles.logo}>
			<Icon
				sprite={sprite}
				iconId='logo'
				color='#000000'
				width={37}
				height={37}
			/>
			<h2 className={styles.logo__text}>Dashboard</h2>
			<span className={styles.version}>v.01</span>
		</div>
	);
};
export default Logo;
