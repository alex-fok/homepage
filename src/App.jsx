import styles from './App.module.css';
import RepoList from './components/RepoList';
import ActivityList from './components/ActivityList';
import DeployedList from './components/DeployedList';
import Section from './components/Section';

function App() {
  return (
    <div class={styles.App}>
      <Section title='Projects'>
        <RepoList />
      </Section>
      <Section title='Activity Log'>
        <ActivityList grow={true} />
      </Section>
      <Section title='Deployed Apps'>
        <DeployedList />
      </Section>
    </div>
  );
}

export default App;
