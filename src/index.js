import React from 'react';
import ReactDOM from 'react-dom';
import {
	Route,
	Switch,
  BrowserRouter
} from 'react-router-dom';
import './index.css';
import HomePageMap from './HomePageMap';
import NotFound from './components/NotFound';
import ViewInfo from './components/ViewInfo';
import * as serviceWorker from './serviceWorker';
const Main = () => (
  <BrowserRouter>
  <Switch>
        <Route exact path="/" component={HomePageMap} />
        <Route exact path="/viewinfo" component={ViewInfo} />
				<Route path='*' component={NotFound} />
	</Switch>
</BrowserRouter>
)
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
