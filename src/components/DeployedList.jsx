import styles from './DeployedList.module.css'

const apps = [
    {
        name: 'minesweeper',
        content: 'This is a 1 vs 1 turn-based minesweeper introduced more than a decade ago by MSN Messenger. The objective of the game is to reveal more mines than your opponent. Player who reveals more than half of the mines first wins the game.'
    }
]

function DeployedList() {
    return (
        <div class={styles.deployedList}>
            <For each={apps}>{(app, i) =>
                <div class={styles.app}>
                    <a
                        class={styles.title}
                        href={'/minesweeper'}
                        target='_blank'
                    >{'>> '}{app.name}</a>
                    <div>{app.content}</div>
                </div>
            }</For>
        </div>
    )
}
export default DeployedList
