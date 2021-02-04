import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer/Footer';

import style from './style.module.css';

const App = () => {
  const match = useRouteMatch('/home');

  return (
    <Switch>
      <Route path="/404" render={() => (
        <h1> 404 page not found! </h1>
      )} />
      <Route>
        <>
          <MenuHeader bgActive={!match || !match.isExact}/>
          <div className={cn(style.wrap, {[style.isHomePage]: match && match.isExact})}>
            <Switch>
              <Route 
                path="/" 
                exact 
                render={() => (<Redirect to="/home" />)} 
              />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" render={() => (
                <h1> This is page about! </h1>
              )} />
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
