import './App.css';
import {Header} from "./components/Header/Header";
import {FirstBlock} from "./components/FirstBlock/FirstBlock";

function App() {
  return (<>
          {/*TODO header always visible*/}
        <Header />
        <FirstBlock />
      </>
  );
}

export default App;
