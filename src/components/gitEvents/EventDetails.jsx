import { For } from 'solid-js';
import styles from './EventDetails.module.css';

function EventDetails(props) {
    const { entries } = props;
    return (
        <ul class={styles.entryList}>
            <For each={entries}>{ ({link, message}, i) =>
                <li class={styles.entry}>
                    <a class={styles.link} href={link.url}>{link.text}</a>
                    <span class={styles.message}>{message}</span>
                </li>
            }</For>
        </ul>
    )
}
export default EventDetails
