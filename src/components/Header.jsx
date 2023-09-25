import styles from './Header.module.css';
import GitIcon from './icons/gitIcon';

function Header() {
    return (
        <div class={styles.header}>
            <div class={styles.title}>alex-fok/homepage</div>
            <a
                class={styles.icon}
                href='https://github.com/alex-fok'
                target='_blank'
            >
                <span style='text-decoration: underline'>GitHub</span>
                <GitIcon />
            </a>
        </div>
    )
}
export default Header;
