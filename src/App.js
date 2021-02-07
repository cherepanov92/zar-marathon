import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import cn from 'classnames';
import firebase from 'firebase';

import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer/Footer';

import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import NotFoundPage from './routes/NotFound';

import style from './style.module.css';

const firebaseConfig = {
  apiKey: "AIzaSyAje9dkqyMdyaOfN0WM-Y7WCh-nNN6iUgU",
  authDomain: "pokemon-game-f2ef8.firebaseapp.com",
  databaseURL: "https://pokemon-game-f2ef8-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-f2ef8",
  storageBucket: "pokemon-game-f2ef8.appspot.com",
  messagingSenderId: "636593100078",
  appId: "1:636593100078:web:36e9eb132b5fb5fd2fd6bf"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

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
