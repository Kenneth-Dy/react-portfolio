import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Router>
      <div>
        <div>
          <Link to='/'>About</Link><br/>
          <Link to='/portfolio'>Portfolio</Link><br />
          <Link to='/contact'>Contact Me</Link><br />
        </div>
        <Switch>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
