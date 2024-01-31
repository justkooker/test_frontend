import Icon from '../Icon';
import sprite from '../../assets/icons/iconSprite.svg';
import styles from './Search.module.scss';
const Search = () => {
    return (
        <div className={styles.search}>
            <button className={styles.search__button}><Icon sprite={sprite} iconId='search' width={24} height={24} /></button>
            <input className={styles.search__input} type="text" placeholder="Search" />
        </div>
    )
}

export default Search;