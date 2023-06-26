import { createSignal } from 'solid-js';
import styles from './Header.module.css';
import GitIcon from './icons/gitIcon';

function Header() {

    const [hidden, setHidden] = createSignal(true)

    return (
        <div class={styles.header}>
            <div class={styles.title}>alex-fok/homepage</div>
            <a
                class={styles.icon}
                href='https://github.com/alex-fok'
                target='_blank'
                onMouseEnter={() => { setHidden(false) }}
                onMouseLeave={() => { setHidden(true) }}
                
            >
                <span class={hidden() ? styles.hidden : ''}>GitHub</span>
                <GitIcon />
            </a>
        </div>
    )
}
export default Header;
