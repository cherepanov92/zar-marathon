import { Route, Switch, useRouteMatch } from 'react-router-dom';
import cn from 'classnames';

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer/Footer';

import style from './style.module.css';

const App = () => {
  const match = useRouteMatch('/');

  return (
    <Switch>
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact}/>
          <div className={cn(style.wrap, {[style.isHomePage]: match.isExact})}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" render={() => (
                <h1> This is page about! </h1>
              )} />
            </Switch>
          </div>
          <Footer/>
        </>
      </Route>
      <Route render={() => (
        <h1> 404 page not found! </h1>
      )} />
    </Switch>
  )
}

export default App;
