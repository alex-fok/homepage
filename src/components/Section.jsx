import styles from './Section.module.css'
function Section(props) {
    return (
        <div class={styles.section} style={props.grow ? {'flex-grow': 1} : {}}>
            <h4 class={styles.title}>{props.title}</h4>
            {props.children}
        </div>
    )
}
export default Section
