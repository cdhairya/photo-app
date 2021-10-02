import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import About from "./components/pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
