import logo from "./monkey.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <a
                    className="App-link-2"
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go to Google.com
                </a>
            </header>
        </div>
    );
}

export default App;
