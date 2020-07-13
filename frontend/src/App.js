import React from 'react';
import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
import history from './history';
import {configureStore} from './store'
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import PublicDragons from './components/PublicDragons';
import { fetchAuthenticated } from './store/actions/account';

const store = configureStore();

// store.dispatch(fetchPublicDragons());

//Redirect to homepage after refreshing the page
// const AuthRoute = props => {
//   if (!store.getState().account.loggedIn) {
//     return <Redirect to={{ pathname: '/' }} />
//   }
//   const { component, path } = props;

//   return <Route path={path} component={component} />;
// }

store.dispatch(fetchAuthenticated());


function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Root}/>
          <Route path="/account-dragons" component={AccountDragons}/>
          <Route path="/public-dragons" component={PublicDragons}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
