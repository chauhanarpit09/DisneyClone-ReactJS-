import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './myComponents/Login'
import Home from './myComponents/Home'
import Header from './myComponents/Header'
import Search from './myComponents/Search'
import Footer from './myComponents/Footer'
import Moviebanner from './myComponents/Moviebanner'
import { selectUsername } from './feature/user/userSlice'
import { useSelector } from 'react-redux'

function App () {
  const username = useSelector(selectUsername)
  return (
    <div className="App">
     <Router>
       <Header />
        <Switch>
          <Route exact path="/">
            {username ? <Home /> : <Login />}
          </Route>
          <Route exact path="/search">
            {username ? <Search /> : <Login />}
          </Route>
          <Route exact path="/home">
            {username ? <Home /> : <Login />}
          </Route>
          <Route exact path="/movie/:id/:category">
            {username ? <Moviebanner /> : <Login />}
          </Route>
        </Switch>
        <Footer />
     </Router>
    </div>
  )
}

export default App
