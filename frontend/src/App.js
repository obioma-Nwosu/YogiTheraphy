import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from 'react-particles-js'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Users from './pages/user';
import Login from './pages/login'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Particles
            className="particles-canvas"
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 900
                  }
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 6,
                    color: "#f9ab00"
                  }
                }
              }
            }}
          />
          <Header />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </>
    </Router>
  );
}

export default App;
