import React, { Suspense, useState } from 'react';
import {
 BrowserRouter as Router,
 Switch,
 Redirect,
 Route,
} from 'react-router-dom';

import './style/global.scss';

const HomePage = React.lazy(() => import('./components/HomePage'));
const ErrorScreen = React.lazy(() => import('./components/errors/ErrorScreen'));

function App(): unknown {
 const [activeLink, setActiveLink] = useState(`${window.location.pathname}`);
 const [burgerActive, setBurgerActive] = useState(false);

 return (
  <div className="App">
   <div className="nav-primary">
    <div className="nav-left">
     <a href="/" id="logoLink">
      <h2 id="text">[GALACTIX]</h2>
      <img id="logo" src="/assets/images/logo.png" alt="logo" />
     </a>
    </div>
    <div className="nav-right">
     <a
      href="/"
      className={
       (activeLink !== '/') ? 'link-primary' : 'link-primary active'
      }
      onClick={() => setActiveLink('/')}
     >
            HOME
      <div />
     </a>
     <a
      href="/about"
      className={
       (activeLink !== '/about')
        ? 'link-primary'
        : 'link-primary active'
      }
      onClick={() => setActiveLink('/about')}
     >
            ABOUT
      <div />
     </a>
     <a
      href="/projects"
      className={
       (activeLink !== '/projects')
        ? 'link-primary'
        : 'link-primary active'
      }
      onClick={() => setActiveLink('/projects')}
     >
            PROJECTS
      <div />
     </a>
     <button className="contact-button">Contact</button>

     <div
      className="nav-burger-container"
      onClick={() => {
       setBurgerActive(!burgerActive);
      }}
     >
      <div
       className={
        burgerActive ? 'nav-burger burger-active' : 'nav-burger'
       }
      ></div>
     </div>
    </div>
   </div>
   <Router>
    <Suspense fallback={<h1>Loading...</h1>}>
     <Switch>
      <Route exact path="/" component={HomePage} />

      {/* ! Handle 404 errors ! */}
      <Route exact path="/error/:type" component={ErrorScreen} />
      <Redirect to="/error/404/" />
     </Switch>
    </Suspense>
   </Router>
  </div>
 );
}

export default App;
