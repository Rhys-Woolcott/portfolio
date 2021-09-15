import { lazy, ReactElement, Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import './style/global.scss';
import { motion } from 'framer-motion';

const ProjectsPage = lazy(() => import('./components/ProjectsPage'));
const ErrorScreen = lazy(() => import('./components/errors/ErrorScreen'));
const HomePage = lazy(() => import('./components/HomePage'));
import Button from './components/component/Button';

function App(): ReactElement {
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

          <Button onClick={() => {
            location.href = '/about';
          }}>
            CONTACT
          </Button>

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
            <Route exact path="/projects" component={ProjectsPage} />

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
