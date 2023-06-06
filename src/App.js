import './App.css';
import Confetti from './Confetti';

const shareMessage = 'I just ran my first container using Docker'
const shareLink = 'https://docker.com/'

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>
          Welcome to Docker World to our TI Gems!!!
        </h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          Great to be a part of Technoidentity.
        </p>
        <div>
          <a target="_blank" href={"https://twitter.com/intent/tweet?text=" + shareMessage + "&url=" + shareLink} class="fa fa-twitter" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://www.linkedin.com/company/technoidentity/?originalSubdomain=in" + shareLink} class="fa fa-linkedin" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://reddit.com/submit?title=" + shareMessage + "&url=" + shareLink} class="fa fa-reddit" rel="noopener noreferrer"> </a>
        </div>
      </header>
    </div>
  );
}

export default App;
