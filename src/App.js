import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './routes/Home';
import GamePage from './routes/Game';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/game" component={GamePage} />
        <Route path="/about" render={() => (
          <h1> This is page about! </h1>
        )} />
        <Route render={() => (
          <h1> 404 page not found! </h1>
        )} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
