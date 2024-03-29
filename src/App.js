import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from "./components/about";
import Admin from "./components/admin";
import GlobalState from "./context/globalState";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/cart";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>

          <div className="container-fluid">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/catalog" exact component={Catalog} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/about" exact component={About} />
              <Route path="/admin" exact component={Admin} />
            </Switch>
          </div>
          <br />
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
