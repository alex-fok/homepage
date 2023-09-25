import styles from './DeployedList.module.css'

const apps = [
    {
        name: 'Minesweeper',
        href: '/minesweeper',
        content: 'A multiplayer turn-based minesweeper introduced more than ' + 
        'a decade ago by MSN Messenger. The objective of the game is to reveal ' +
        'more mines than your opponent. Player who reveals more than half of the mines first wins the game.',
        thumbnail: 'minesweeper.png'
    },
    {
        name: 'Visual Physics',
        href: '/visual-physics',
        content: 'A visualization of common physics equations.',
        thumbnail: 'visual-physics.png'
    }
]

function DeployedList() {
    return (
        <div class={styles.deployedList}>
            <For each={apps}>{ app =>
                <a
                    class={styles.app}
                    href={app.href}
                >
                    <div
                        class={styles.title}
                        target='_blank'
                    >{'>> '}{app.name}</div>
                    <div class={styles.imgWrapper}>
                        <img
                            src={'/images/' + app.thumbnail}
                            style='width: 100%; height: auto; max-width: 20rem;'
                        ></img>
                    </div>
                    <div>{app.content}</div>
                </a>
            }</For>
        </div>
    )
}
export default DeployedList
