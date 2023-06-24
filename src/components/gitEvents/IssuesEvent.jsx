import EventDetails from './EventDetails';

function IssuesEvent(props) {
    const { actor, repo, payload } = props;
    const entries = [{
        link: {
            url: payload.issue.html_url,
            text: `Issue #${payload.issue.number}`
        },
        message: payload.issue.title
    }];
    
    return (
        <div>
            <span>
                {actor.display_login} {payload.action}{' '}
                <a href={payload.issue.html_url}>issue #{payload.issue.number}</a>{' '}
                for <a href={`https://github.com/${repo.name}`}>{repo.name}</a>
            </span>
            <EventDetails entries={entries} />
        </div>
    )
}
export default IssuesEvent
