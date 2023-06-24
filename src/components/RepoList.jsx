import { createSignal, onMount } from 'solid-js';
import { For } from 'solid-js/web';
import displayTime from '../utils/displayTime';
import styles from './RepoList.module.css';


function RepoList() {
    const [repos, setRepos] = createSignal()
    
    onMount(async() => {
        const r = await fetch('http://api.github.com/users/alex-fok/repos?sort=pushed')
        const rJson = await r.json()
        rJson
        setRepos(rJson.slice(0, 5))
    })

    return (
        <div class={styles.repoList}>
            <For each={repos()}>{(r, _) =>
                <a class={styles.repoListItem} href={r.html_url} target='_blank'>
                    <div class={styles.htmlLink} >{r.name}</div>
                    <div class={styles.info}>Latest commit: {displayTime(r.pushed_at)}</div>
                </a>
            }</For>
        </div>
    )
}

export default RepoList;
