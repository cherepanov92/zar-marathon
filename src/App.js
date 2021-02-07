import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer/Footer';

import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import NotFoundPage from './routes/NotFound';

import style from './style.module.css';

const App = () => {
  const match = useRouteMatch('/home');

  return (
    <Switch>
      <Route path="/404" component={NotFoundPage} />
      <Route>
        <>
          <MenuHeader bgActive={!match || !match.isExact}/>
          <div className={cn(style.wrap, {[style.isHomePage]: match && match.isExact})}>
            <Switch>
              <Route path="/" exact 
                render={() => (<Redirect to="/home" />)} 
              />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/game" component={GamePage} />
              <Route path="/home" component={HomePage} />

              <Route render={() => (
                <Redirect to="/404" />
              )} />
            </Switch>
          </div>
          <Footer/>
        </>
      </Route>
    </Switch>
  )
}

export default App;
