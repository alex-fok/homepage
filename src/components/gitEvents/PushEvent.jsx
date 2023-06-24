import EventDetails from './EventDetails';

function PushEvent (props) {
    const { actor, payload, repo } = props;

    const entries = payload.commits.map(commit => ({
        link: {
            url: `https://github.com/${repo.name}/commit/${commit.sha}}`,
            text: commit.sha.slice(0, 7)
        },
        message: commit.message
    }));
    
    return (
        <div>
            <span>
                {actor.display_login} pushed {payload.commits.length} commit{payload.commits.length > 1 ? 's' : ''} to 
                <a href={`https://github.com/${repo.name}`}>
                    {repo.name}
                </a>
            </span>
            <EventDetails entries={entries}/>
        </div>
    )
}

export default PushEvent
