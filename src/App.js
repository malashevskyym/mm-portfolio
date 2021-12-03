import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 
'react-router-dom';
import Footer from './components/Footer'
import Home from './components/pages/Home';
import Coding from './components/pages/Coding';
import UX from './components/pages/UX';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router className= "router">
        <Navbar />
        <Switch>
          <Route path='/mm-portfolio' exact component= {Home}/>
          <Route path='/Coding' exact component= {Coding}/>
          <Route path='/UX' exact component= {UX}/>
          <Route path='/About' exact component= {About}/>
        </Switch>
        <Footer className = 'footer'/>
      </Router>
    </>
  );
}

export default App;
