import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signupform';
import Login from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
