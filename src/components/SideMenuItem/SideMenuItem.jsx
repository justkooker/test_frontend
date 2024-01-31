import { useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import sprite from '../../assets/icons/iconSprite.svg';
import styles from './SideMenuItem.module.scss';

const SideMenuItem = ({ text, iconId, arrow = true, arrowHover, active }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<li
			data-name={text}
			className={classNames(styles.listItem, active ? styles.active : '')}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Icon
				sprite={sprite}
				iconId={
					isHovered && !iconId.endsWith('-hover') ? `${iconId}-hover` : iconId
				}
				width={24}
				height={24}
			/>
			<p className={styles.listItem__text}>{text}</p>
			{arrow && (
				<Icon
					sprite={sprite}
					iconId={isHovered || arrowHover ? 'arrow-hover' : 'arrow'}
					width={16}
					height={16}
				/>
			)}
		</li>
	);
};
export default SideMenuItem;
