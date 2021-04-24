import React from 'react'
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar, Footer} from './components'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import SignUp from './pages/SignUp/SignUp'




function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop />
      <Navbar />

      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/services' exact component={Services}></Route>
        <Route path='/products' exact component={Products}></Route>
        <Route path='/signup' exact component={SignUp}></Route>

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
