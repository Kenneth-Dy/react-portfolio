import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Navibar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <>
    <main className='mainBody'>
      <Router>
        <div>
          <Navibar />
          <Switch>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/'> 
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </main>
    <Footer />
    </>
  )
}

export default App
