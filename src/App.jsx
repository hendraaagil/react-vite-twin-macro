import { Route, Switch } from 'react-router-dom';
import Docs from './pages/Docs';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/docs" component={Docs} />
    </Switch>
  );
}

export default App;
