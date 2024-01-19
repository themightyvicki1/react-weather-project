import "./App.css";
import Weather from "./Weather";

/*keep App as general as possible - component call here*/

export default function App() {
  return (
    <div className="App">
      {/* container because we are using bootstrap, imported it differently with react so not in index.html, it will update this way*/}
      <div className="container">
        <h1>React Weather Application</h1>
        {/*component call to the weather app */}
        {/*send a default city, this will load app with this city */}
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/themightyvicki1/react-weather-project"
            title="https://github.com/themightyvicki1/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            Open source
          </a>{" "}
          coded by Victoria Greer{" "}
          <small>
            <i className="fa-regular fa-heart"></i>
          </small>
        </footer>
      </div>
    </div>
  );
}
