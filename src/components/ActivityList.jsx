import { createSignal, onMount } from 'solid-js';
import PushEvent from './gitEvents/PushEvent';
import IssuesEvent from './gitEvents/IssuesEvent';
import displayTime from '../utils/displayTime';
import styles from './ActivityList.module.css';

const EventJsx = {
    'PushEvent': PushEvent,
    'IssuesEvent': IssuesEvent,
}

function ActivityList() {
    const [activities, setActivities] = createSignal();
    onMount(async() => {
        const a = await(fetch('https://api.github.com/users/alex-fok/events'));
        const aJson = await a.json();
        
        const result = aJson.filter(ev => EventJsx[ev.type] !== undefined).slice(0, 10);
        setActivities(result);
    });
    
    return (
        <div class={styles.activityList}>
            <For each={activities()}>{ (activity, _) =>
                <div class={styles.activityWrapper}>
                    {EventJsx[activity.type](activity)}{''}
                    <span class={styles.timestamp}>{displayTime(activity.created_at)}</span>
                </div>
            }</For>
        </div>
    )
}
export default ActivityList;
