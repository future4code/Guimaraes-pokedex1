import GlobalState from "./global/GlobalState";
import Router from "./routes/Routes"
import styles from './styles.css'

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
